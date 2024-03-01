const express = require('express');
const cors = require('cors');

const userRouter = require('./routes/userRoutes');
const AppError = require('./utils/appError');
const connectToDB = require('./services/connectToDB');
connectToDB();

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('<h1>Welcome to Express Server</h1>');
});

app.use('/users', userRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
