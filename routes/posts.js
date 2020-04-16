const router = require("express").Router();
const verify = require("./verifyToken");

router.get("/", verify, (req, res) => {
    User.findbyOne({_id: req.user})
})

module.exports = router;