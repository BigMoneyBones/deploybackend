var express = require("express");
var router = express.Router();

const userList = [{
  id: 1,
  firstName: "John",
  lastName: "Doe",
  email: "jd@gmail.com"
}];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// GET users
router.get('/get-users', function (req, res) {
  res.json(userList);
})


router.post("/post-message", async (req, res) => {
  try {
    const dateTime = new Date();
    const clientMessage = req.body.clientMessage;
    const response = `Received client message: ${clientMessage}. Responded at ${dateTime.toString()}`;
    res.json({ serverMessage: response }).status(200);
  } catch (error) {
    res.json({ success: false }).status(500);
  }
});
module.exports = router;
