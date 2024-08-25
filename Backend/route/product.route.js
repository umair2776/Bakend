const express = require('express');
const router = express.Router();
const controller = require("../controllers/product.controllers");
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'upload/');
    },
    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname); // Fixed the typo here
        cb(null, file.fieldname + '-' + Date.now() + ext);
    }
});

const upload = multer({ storage: storage });

router.post("/", upload.single('thumbnail'), controller.store);

router.get("/", controller.index);
router.get("/:id", controller.get);
router.delete("/:id", controller.destroy);
router.put("/:id", controller.update);

module.exports = router;
