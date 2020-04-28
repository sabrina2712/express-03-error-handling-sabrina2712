const express = require("express");
const router = express.Router();

// - GET (all, individual)
const hobbies = ["travelling", "reading books", "gardening"];

router.get("/about", (req, res) => {
  res.status(200).send({
    name: "Sabrina",
    lastname: "Roshni",
    age: 39,
    class: "FBW101",
    location: "BER",
  });
});

router.get("/hobbies", (req, res) => {
  res.status(200).send(hobbies);
});
router.get("/hobbies/:hobby", (req, res) => {
  let hobby = req.params.hobby;
  res.status(200).send(hobbies.includes(hobby));
});

module.exports = router;
