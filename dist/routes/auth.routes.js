"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const auth_controller_1 = require("../controllers/auth.controller");
const verifySignup_1 = require("../middlewares/verifySignup");
router.post("/signup", [verifySignup_1.checkDuplicateEmail], auth_controller_1.signUp);
router.post("/signin", auth_controller_1.signIn);
exports.default = router;
