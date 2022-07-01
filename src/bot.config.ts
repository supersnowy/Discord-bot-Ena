import { IntentsBitField, PermissionsString } from "discord.js";
import { BotConfig } from "./typings";

export default {
    name: "Ena",
    commandType: "both", // text / slash / both
    database: true, // true / false
    intents: Object.keys(IntentsBitField.Flags).filter(f => f.startsWith("Guild")).concat("MessageContent"), // IntentString[]
    prefix: "!", // string
    admins: [""], // string[] of user ids
    sandboxServers: ["bob", "982619658618294332"], // string[] of server ids
    invites: {
        full: ``, // https://discord.com/developers/applications/<client_id>/oauth2/url-generator
        minimal: ``, // https://discord.com/developers/applications/<client_id>/oauth2/url-generator
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
} as BotConfig