const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const errorHandler = require('./middlewares/errorMiddleware');
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

app.all('*', (req, res, next) => {
  next(new Error(`Can't find ${req.originalUrl} on this server!`, 404));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
