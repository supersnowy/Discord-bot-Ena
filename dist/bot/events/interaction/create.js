"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ena_1 = __importDefault(require("../../../ena"));
const Event_1 = __importDefault(require("../../../lib/classes/Event"));
const Checks_1 = require("../../../lib/utilities/Checks");
const Cooldowns_1 = __importDefault(require("../../../lib/utilities/Cooldowns"));
exports.default = new Event_1.default("interactionCreate", (interaction) => {
    if (interaction.isChatInputCommand()) {
        if (!interaction.commandName)
            return interaction.reply({ content: `No command found under \`${interaction.commandName}\`` });
        const command = ena_1.default.slashCommands.find(f => f.name.toLowerCase() === interaction.commandName.toLowerCase());
        if (!command)
            return interaction.reply({ content: `No command found under \`${interaction.commandName}\`` });
        (0, Checks_1.PermissionCheck)(command, ena_1.default.extensions.interaction(interaction), interaction.member);
        (0, Cooldowns_1.default)(command.name, interaction.member, command, { args: interaction.options, client: ena_1.default, message: interaction }, interaction, "slash");
    }
});
//# sourceMappingURL=create.js.map