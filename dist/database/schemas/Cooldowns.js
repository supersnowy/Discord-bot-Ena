"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.default = (0, mongoose_1.model)("Cooldowns", new mongoose_1.Schema({
    user_id: { type: String, required: true },
    timeRemaining: { type: Number, required: true },
    commandName: { type: String, required: true }
}));
//# sourceMappingURL=Cooldowns.js.map