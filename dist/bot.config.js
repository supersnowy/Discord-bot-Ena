"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
exports.default = {
    name: "Ena",
    commandType: "both",
    database: true,
    intents: Object.keys(discord_js_1.IntentsBitField.Flags).filter(f => f.startsWith("Guild")).concat("MessageContent"),
    prefix: "!",
    admins: [""],
    sandboxServers: ["bob", "982619658618294332"],
    invites: {
        full: ``,
        minimal: ``,
        default: "full", // full / minimal
    },
    colours: {
        // Discord.js Types Were Being Werid With Hex Codes So Ive Just Used An Built In Function To Resolve The Supported Colour Code;
        primary: "#fd708d",
        secondary: "#3c4551",
        success: "#37cdbe",
        error: "#ef233c",
        warning: "#ffd000",
    },
    requiredPermissions: ["ViewChannel", "SendMessages", "AttachFiles", "EmbedLinks", "ManageMessages"],
    supportServer: "",
    version: "1.0.0",
    gitHub: "https://github.com/chethanyadav456/Ena",
};
//# sourceMappingURL=bot.config.js.map