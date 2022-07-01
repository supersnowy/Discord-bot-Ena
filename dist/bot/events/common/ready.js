"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Event_1 = __importDefault(require("../../../lib/classes/Event"));
exports.default = new Event_1.default("ready", (client) => {
    client.logger.info(`Connected to client, ${client.user.tag}`, { label: "INFO", src: "src/bot/events/common/ready.ts" });
});
//# sourceMappingURL=ready.js.map