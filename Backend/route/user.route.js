const express = require('express');
const router = express.Router();
const controller = require("../controllers/user.controllers");

router.post("/register", controller.register);
router.post("/login", controller.login);

// Specific routes before generic ones
router.post("/verify", controller.verifyUser);
router.get("/:id", controller.get);

// router.delete("/:id", controller.destroy);
// router.put("/:id", controller.update);

module.exports = router;
