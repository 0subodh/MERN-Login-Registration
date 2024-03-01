const express = require('express');
const cors = require('cors');

// connect to database first before creating models
const connectToDB = require('./services/connectToDB');
connectToDB();

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
