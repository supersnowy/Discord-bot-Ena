"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtendedMessage = exports.ExtendedInteraction = void 0;
const ena_1 = __importDefault(require("../../ena"));
const bot_config_1 = __importDefault(require("../../bot.config"));
class ExtendedResponseBase {
    _ctx;
    constructor(ctx) {
        if (ctx) {
            this._ctx = ctx;
        }
    }
    getEmbedFormat(options) {
        return {
            title: options && options.title ? options.title : null,
            description: options && options.description ? options.description : this._ctx && this._ctx.content ? this._ctx.content : options && options.title ? null : "Errr, appears an discription is required",
            color: options && options.color ? options.color : bot_config_1.default.colours.primary || null,
            author: options && options.author ? options.author : null,
            fields: options && options.fields ? options.fields : null,
            footer: options && options.footer ? options.footer : { iconURL: ena_1.default.user.displayAvatarURL({ extension: "png" }) },
            image: options && options.image ? options.image : null,
            provider: options && options.provider ? options.provider : null,
            thumbnail: options && options.thumbnail ? options.thumbnail : null,
            timestamp: options && options.timestamp ? options.timestamp : null,
            type: options && options.type ? options.type : null,
            url: options && options.url ? options.url : null,
            video: options && options.video ? options.video : null
        };
    }
}
class ExtendedInteraction extends ExtendedResponseBase {
    ctx;
    constructor(ctx) {
        super();
        this.ctx = ctx;
    }
    async reply(options) {
        return await this.ctx.reply(options).catch(() => {
            return this.ctx.channel.send(options);
        });
    }
}
exports.ExtendedInteraction = ExtendedInteraction;
class ExtendedMessage extends ExtendedResponseBase {
    ctx;
    constructor(ctx) {
        super(ctx);
        this.ctx = ctx;
    }
    async reply(options) {
        return await this.ctx.reply(options).catch(() => {
            return this.ctx.channel.send(options);
        });
    }
}
exports.ExtendedMessage = ExtendedMessage;
//# sourceMappingURL=ExtendedResponse.js.map