const Hangout = require("../Models/Hangout.model");
const createError = require("http-errors");
const { hangoutSchema } = require("../helpers/validation_schema");
const { all } = require("../routes/Auth.route");

module.exports = {
  newHangout: async (req, res, next) => {
    try {
      const result = await hangoutSchema.validateAsync(req.body);

      const doesExist = await Hangout.findOne({ title: result.title });
      if (doesExist)
        throw createError.Conflict(`${result.title} is already taken`);

      const hangout = new Hangout(result);
      const savedHangout = await hangout.save();

      const hangouts = await Hangout.find();

      res.send({ savedHangout });
    } catch (error) {
      next(error);
    }
  },
  allHangouts: async (req, res, next) => {
    try {
      const hangouts = await Hangout.find();

      res.send({ hangouts });
    } catch (error) {
      next(error);
    }
  },
  singleHangout: async (req, res, next) => {
    try {
      const { id } = req.params;
      const hangout = await Hangout.findById(id);

      if (!hangout) {
        throw createError.Conflict("Hangout id is incorrect or does not exist");
      }

      res.send({ hangout });
    } catch (error) {
      next(error);
    }
  },
  deleteHangout: async (req, res, next) => {
    try {
      const { id } = req.params;

      const hangout = await Hangout.findById(id);
      if (!hangout) {
        throw createError.Conflict("Hangout id is incorrect or does not exist");
      }

      await Hangout.deleteOne({ _id: id });

      res.status(200).send({ message: "Hangout was deleted" });
    } catch (error) {
      next(error);
    }
  },
  editHangout: async (req, res, next) => {
    try {
      const result = await hangoutSchema.validateAsync(req.body);

      const hangout = await Hangout.findById(req.params.id);

      if (result && hangout) {
        hangout.title = result.title || hangout.title;
        hangout.description = result.description || hangout.description;
        // hangout.city = result.city || hangout.city;
        // hangout.address = result.address || hangout.address;
        hangout.userId = result.userId || hangout.userId;
        hangout.latLong = result.latLong || hangout.latLong;
        hangout.joining = result.joining || hangout.joining;

        const updatedHangout = await hangout.save();

        res.send({
          // _id: updatedHangout._id,
          title: updatedHangout.title,
          description: updatedHangout.description,
          // city: updatedHangout.city,
          // address: updatedHangout.address,
          userId: updatedHangout.userId,
          latLong: updatedHangout.latLong,
          joining: updatedHangout.joining,
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
