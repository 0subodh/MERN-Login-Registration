const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const userRouter = require('./routes/userRoutes');
const connectToDB = require('./config/connectToDB');
connectToDB();
const app = express();

app.use(cors());
app.use(express.json()); // middleware to parse body (req.body)
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('<h1>Welcome to Express Server</h1>');
});

app.use('/users', userRouter);

app.use('*', (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render('error');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
