const errorHandlerMiddleware = (err, req, res, next) => {
  console.log('error', err);
  res.status(500).json({ msg: 'these was an error' });
};

export default errorHandlerMiddleware;