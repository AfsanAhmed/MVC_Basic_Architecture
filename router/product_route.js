const express = require("express");
const { getProduct, saveProduct } = require("../controller/productController.js");
const router = express.Router();

router.get("/product",getProduct);
router.post("/product",saveProduct);

module.exports = router;