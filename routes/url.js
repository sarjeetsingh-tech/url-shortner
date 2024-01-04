const express = require("express");
const {access,createShortenUrl,details}=require("../controllers/index");

const router = express.Router();
router.get("/:id",access)

router.post("/shorten",createShortenUrl);
router.get("/:id/details",details )
router.get("/all",)
module.exports = router;