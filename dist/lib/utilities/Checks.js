"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionCheck = void 0;
const bot_config_1 = __importDefault(require("../../bot.config"));
const PermissionCheck = (command, context, member) => {
    if (command.adminOnly && !bot_config_1.default.admins.includes(member.id))
        return context.reply({ content: `This command is an bot admin only command.` });
    if (member.permissions.has(command.permissions || []))
        return context.reply({ content: `It appears you are missing the required permissions to run \`${command.name}\`` });
};
exports.PermissionCheck = PermissionCheck;
//# sourceMappingURL=Checks.js.map