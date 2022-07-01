"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Event_1 = __importDefault(require("../../../lib/classes/Event"));
const bot_config_1 = __importDefault(require("../../../bot.config"));
const ena_1 = __importDefault(require("../../../ena"));
const Cooldowns_1 = __importDefault(require("../../../lib/utilities/Cooldowns"));
const Checks_1 = require("../../../lib/utilities/Checks");
exports.default = new Event_1.default("messageCreate", (message) => {
    if (!message.guild || message.author.bot || !message.content.startsWith(bot_config_1.default.prefix))
        return;
    const [cmd, ...args] = message.content.slice(bot_config_1.default.prefix.length).trim().split(/ +/g);
    const command = ena_1.default.textCommands.find(f => f.name.toLowerCase() === cmd.toLowerCase() || f.aliases?.includes(cmd.toLowerCase()));
    if (!command)
        return;
    (0, Checks_1.PermissionCheck)(command, ena_1.default.extensions.message(message), message.member);
    (0, Cooldowns_1.default)(command.name, message.member, command, { args: args, client: ena_1.default, message }, message, "slash");
});
//# sourceMappingURL=create.js.map