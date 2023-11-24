const Place = require("../models/Place");

module.exports = {
  addPlace: async (req, res, next) => {
    const {
      country_id,
      description,
      imageUrl,
      location,
      title,
      rating,
      review,
      latitude,
      longitude,
    //   popular,
    } = req.body;

    try {
      const newPlace = new Place({
        country_id,
        description,
        imageUrl,
        location,
        title,
        rating,
        review,
        latitude,
        longitude,
        // popular,
      });

      await newPlace.save();

      res.status(200).json({ status: true, msg: "Place added" });
    } catch (error) {
      return next(error);
    }
  },

  getPlaces: async (req, res, next) => {
    try {
      const places = await Place.find(
        {},
        "_id review rating imageUrl title country_id"
      );
      res.status(200).json({ status: true, places });
    } catch (error) {
      return next(error);
    }
  },

  getPlace: async (req, res, next) => {
    const placeId = req.params.id;

    try {
      const place = await Place.find(placeId, {
        createdAt: 0,
        updatedAt: 0,
        __v: 0,
      });
      res.status(200).json({ status: true, place });
    } catch (error) {
      return next(error);
    }
  },
};
