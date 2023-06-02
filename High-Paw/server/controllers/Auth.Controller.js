const User = require("../Models/User.model");
const UserToken = require("../Models/Token.model");
const createError = require("http-errors");
const { authSchema, loginSchema } = require(`../helpers/validation_schema`);
const {
  signAccessToken,
  verifyAccessToken,
  signRefreshToken,
  verifyRefreshToken,
  generateTokens,
} = require("../helpers/jwt_helper");

module.exports = {
  register: async (req, res, next) => {
    try {
      const result = await authSchema.validateAsync(req.body);

      const doesExist = await User.findOne({ email: result.email });
      if (doesExist)
        throw createError.Conflict(`${result.email} is already registered`);

      const user = new User(result);
      const savedUser = await user.save();
      const accessToken = await signAccessToken(savedUser.id);
      const refreshToken = await signRefreshToken(savedUser.id);
      // const {accessToken, refreshToken} = await generateTokens(savedUser.id);
      res.send({ accessToken, refreshToken, user });
    } catch (error) {
      if (error.isJoi === true) res.status(422);
      next(error);
    }
  },
  login: async (req, res, next) => {
    try {
      const result = await loginSchema.validateAsync(req.body);
      const user = await User.findOne({ email: result.email });

      if (!user) throw createError.NotFound("User is not registered");

      const isMatch = await user.isValidPassword(result.password);

      if (!isMatch)
        throw createError.Unauthorized("Username or Password is not valid");

      const accessToken = await signAccessToken(user.id);
      const refreshToken = await signRefreshToken(user.id);

      res.send({ accessToken, refreshToken, user });
    } catch (error) {
      if (error.isJoi === true)
        return next(createError.BadRequest("Invalid username or Password"));
      next(error);
    }
  },
  logout: async (req, res, next) => {
    try {
      const { refreshToken } = req.body;

      if (!refreshToken) throw createError.BadRequest();
      const userId = await verifyRefreshToken(refreshToken);

      const deleteToken = await UserToken.deleteOne({ userId });
      res.send({ deleteToken, message: "User logged out successfully" });
    } catch (error) {
      next(error);
    }
  },
  refreshToken: async (req, res, next) => {
    try {
      const { refreshToken } = req.body;
      if (!refreshToken) throw createError.BadRequest();

      const userId = await verifyRefreshToken(refreshToken);

      const accessToken = await signAccessToken(userId);
      const refToken = await signRefreshToken(userId);
      res.send({ accessToken: accessToken, refreshToken: refToken });
    } catch (error) {
      next(error);
    }
  },
};
