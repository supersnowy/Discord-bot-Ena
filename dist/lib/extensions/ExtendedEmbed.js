"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const builders_1 = require("@discordjs/builders");
const ena_1 = __importDefault(require("../../ena"));
class ExtendedEmbed {
    constructor(data) {
        if (!data.footer)
            data['footer'] = { text: `Ena @2022`, icon_url: `${ena_1.default.user.displayAvatarURL({ extension: "png" })}` };
        return new builders_1.EmbedBuilder(data);
    }
}
exports.default = ExtendedEmbed;
//# sourceMappingURL=ExtendedEmbed.js.map