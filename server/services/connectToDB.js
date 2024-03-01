const mongoose = require('mongoose');
const keys = require('../config/keys');

const connectionString = keys.connectionStringMongoDB;

const connectToDB = async () => {
  try {
    await mongoose.connect(connectionString, {
      autoIndex: true,
    });
    console.log('Connected to Mongodb Atlas');
  } catch (error) {
    console.error(error);
  }
};

module.exports = connectToDB;
