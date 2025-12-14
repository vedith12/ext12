function logger(req, res, next) {
  console.log("Logger middleware called");  
  console.log(req.method, req.url);
  next();
}

module.exports = logger;