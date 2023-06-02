const User = require("../Models/User.model");

let auth = (req, res, next) => {
  let token = req.cookies.auth;
  User.findToken(token, (user) => {
    // if(err) throw err;
    if (!user)
      return res.json({
        error: true,
      });

    req.token = token;
    req.user = user;
    next();
  });
};

module.exports = { auth };
