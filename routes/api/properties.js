const router = require("express").Router();
const propertyController = require("../../controllers/propertyController");

// Matches with "/api/properties/list"
// router.route("/list")
  // .get(propertyController.findAll)

// Matches with "/api/properties"
router.route("/")
  .post(propertyController.create)
  .get(propertyController.findAll);

// Matches with "/api/properties/:id"
router.route("/:id")
  .get(propertyController.findOne)
  .put(propertyController.update)
  .delete(propertyController.remove);

module.exports = router;