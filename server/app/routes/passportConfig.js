// Middleware function to authenticate routes 
module.exports.auth = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next(); 
  }

  res.status(401).json({
    message: "Unauthorized"
  });
}