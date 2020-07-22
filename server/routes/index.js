const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");

<<<<<<< HEAD
// router.get("/", mainController.homePage);

router.get('/', (req, res) => {
  res.render('index');
});
=======
router.get("/", mainController.novelsPage);
>>>>>>> b00a69c... add templating

router.get("/novels-rockstar", (req, res) => {
  res.render("layout");
})

module.exports = router;
