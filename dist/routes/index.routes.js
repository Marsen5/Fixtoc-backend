"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const pkg = require("../../package.json");
router.get("/", (req, res) => {
    return res.json({
        message: "API TFG "
    });
});
exports.default = router;
