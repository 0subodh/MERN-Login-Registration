exports.errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode;
  let message = err.message;

  res.status(statusCode).json({
    message: message,
    stack: err.stack,
  });
};
