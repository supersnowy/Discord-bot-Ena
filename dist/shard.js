"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const discord_js_1 = require("discord.js");
const manager = new discord_js_1.ShardingManager(`./dist/index.js`, {
    token: process.env.TOKEN
});
//# sourceMappingURL=shard.js.map