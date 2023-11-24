const router = require("express").Router();
const countryController = require("../controllers/countryController");

router.post("/", countryController.addCountry);
router.post("/addPlaces", countryController.addPlacesToCountry);
router.get("/", countryController.getCountries);
router.get("/:id", countryController.getCountry);

module.exports = router;