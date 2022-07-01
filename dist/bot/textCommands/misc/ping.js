"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TextCommand_1 = __importDefault(require("../../../lib/classes/TextCommand"));
exports.default = new TextCommand_1.default({
    name: "ping",
    cooldown: 5,
    execute: async ({ args, client, message }) => {
        client.extensions.message(message).reply({ content: `Pong 🏓 \`${client.ws.ping}ms\`` });
    }
});
//# sourceMappingURL=ping.js.map