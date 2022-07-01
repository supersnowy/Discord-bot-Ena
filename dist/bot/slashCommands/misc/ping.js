"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SlashCommand_1 = __importDefault(require("../../../lib/classes/SlashCommand"));
const bot_config_1 = __importDefault(require("../../../bot.config"));
exports.default = new SlashCommand_1.default({
    name: "ping",
    description: `See the current api/websocket ping for ${bot_config_1.default.name}s`,
    cooldown: 15,
    execute: async ({ args, client, message }) => {
        client.extensions.interaction(message).reply({ content: "Pong 🏓 `" + client.ws.ping + "`" });
    }
});
//# sourceMappingURL=ping.js.map