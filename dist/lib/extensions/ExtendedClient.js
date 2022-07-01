"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const bot_config_1 = __importDefault(require("../../bot.config"));
const Logger_1 = __importDefault(require("../utilities/Logger"));
const glob_1 = require("glob");
const util_1 = require("util");
const database_1 = __importDefault(require("../../database"));
const _1 = __importDefault(require("."));
const globPromise = (0, util_1.promisify)(glob_1.glob);
class ExtendedClient extends discord_js_1.Client {
    textCommands = new discord_js_1.Collection();
    slashCommands = new discord_js_1.Collection();
    config = bot_config_1.default;
    version = process.env.VERSION === "developement" ? `${bot_config_1.default.version}-dev` : bot_config_1.default.version;
    logger = Logger_1.default;
    extensions = new _1.default()._();
    constructor() {
        super({
            intents: bot_config_1.default.intents,
            partials: [discord_js_1.Partials.Channel, discord_js_1.Partials.GuildMember, discord_js_1.Partials.GuildScheduledEvent, discord_js_1.Partials.Message, discord_js_1.Partials.Reaction, discord_js_1.Partials.ThreadMember, discord_js_1.Partials.User],
            presence: bot_config_1.default.presence,
            allowedMentions: { parse: ["users"] },
        });
        this.__();
    }
    async _importFile(path) {
        return await (await Promise.resolve().then(() => __importStar(require(path))))?.default;
    }
    async __() {
        this.login(process.env.TOKEN);
        if (this.config.database)
            (0, database_1.default)(process.env.MONGO_URL);
        this._loadCommands();
        this._loadEvents();
    }
    async _loadCommands() {
        const commands = [];
        const slashCommands = [];
        if (bot_config_1.default.commandType.toLowerCase() === "both") {
            await (await globPromise(`${__dirname}/../../bot/textCommands/**/**{.ts,.js}`)).forEach((filePath) => { commands.push({ type: "text", filePath }); });
            await (await globPromise(`${__dirname}/../../bot/slashCommands/**/**{.ts,.js}`)).forEach((filePath) => { commands.push({ type: "slash", filePath }); });
        }
        else {
            await (await globPromise(`${__dirname}/../../bot/${bot_config_1.default.commandType.toLowerCase()}Commands/**/**{.ts,.js}`)).forEach((filePath) => { commands.push({ type: bot_config_1.default.commandType, filePath }); });
        }
        commands.forEach(async (res) => {
            const file = await this._importFile(res.filePath);
            if (!file || !file.name)
                return;
            let collection;
            if (res.type === "slash") {
                collection = this.slashCommands;
            }
            ;
            if (res.type === "text") {
                collection = this.textCommands;
            }
            ;
            collection.set(file.name, file);
            if (res.type === "slash") {
                slashCommands.push(file);
            }
        });
        this.on("ready", () => {
            if (bot_config_1.default.commandType === "slash" || bot_config_1.default.commandType === "both") {
                if (process.env.VERSION !== "production") {
                    bot_config_1.default.sandboxServers.forEach((serverId) => {
                        const guild = this.guilds.cache.find(f => f.id === serverId);
                        if (!guild)
                            return this.logger.silly(`Cannot locate guild with guild id "${serverId}"`, { label: "SILLY", src: "src/lib/extensions/ExtendedClient.ts" });
                        guild.commands.set(slashCommands);
                    });
                }
                else {
                    this.application.commands.set(slashCommands);
                }
            }
        });
    }
    async _loadEvents() {
        const eventFilePaths = await globPromise(`${__dirname}/../../bot/events/**/**{.ts,.js}`);
        eventFilePaths.forEach(async (filePath) => {
            const file = await this._importFile(filePath);
            if (!file.eventName)
                return;
            this.on(file.eventName, file.execute);
        });
    }
}
exports.default = ExtendedClient;
//# sourceMappingURL=ExtendedClient.js.map