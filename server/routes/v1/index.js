const express = require('express');
const router = express.Router();
const logController = require("../../controllers/logController");

router.get("/filter", logController.logFilter);
router.get("/filter/timestamp", logController.logFilterByTimestamp);

module.exports = router;