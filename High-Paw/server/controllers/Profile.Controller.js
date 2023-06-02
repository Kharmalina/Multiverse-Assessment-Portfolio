const User = require("../Models/User.model");
const createError = require("http-errors");
const { profileSchema } = require(`../helpers/validation_schema`);
const {
  signAccessToken,
  verifyAccessToken,
  signRefreshToken,
  verifyRefreshToken,
} = require("../helpers/jwt_helper");

module.exports = {
  profileDetails: async (req, res, next) => {
    try {
      const user = await User.findById(req.params.id);

      if (user) {
        res.send({
          email: user.email,
          name: user.name,
          breed: user.breed,
          age: user.age,
          picture: user.picture,
          city: user.city,
        });
      } else {
        res.status(404);
        throw new Error("Profile Details Not Found");
      }
    } catch (error) {
      if (error) next(error);
    }
  },
  editProfile: async (req, res, next) => {
    try {
      const result = await profileSchema.validateAsync(req.body);
      const user = await User.findById(req.params.id);

      if (result && user) {
        user.name = result.name || user.name;
        user.breed = result.breed || user.breed;
        user.age = result.age || user.age;
        user.picture = result.picture || user.picture;
        user.city = result.city || user.city;

        // for being able to update the user profile details
        // user.address = result.address || user.address;
        // user.latLong = result.latLong || user.latLong;

        // if (result.password && result.confirmPassword) {
        //   user.password = result.password,
        //   user.confirmPassword = result.confirmPassword
        // }

        const updatedUser = await user.save();

        res.send({
          // _id: updatedUser._id,
          name: updatedUser.name,
          breed: updatedUser.breed,
          age: updatedUser.age,
          picture: updatedUser.picture,
          city: updatedUser.city,
        });
      } else {
        res.status(404);
        throw new Error("Error Updating Profile Details");
      }
    } catch (error) {
      console.log(error);
    }
  },
};
