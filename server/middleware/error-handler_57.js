const errorHandlerMiddleware = (err, req, res, next) => {
  console.log("error", err);
  console.log(next);
  res.status(500).json(err.message);
};

export default errorHandlerMiddleware;
