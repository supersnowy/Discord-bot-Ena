"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ExtendedEmbed_1 = __importDefault(require("./ExtendedEmbed"));
const ExtendedResponse_1 = require("./ExtendedResponse");
class Extensions {
    _() {
        return {
            interaction: (ctx) => {
                return new ExtendedResponse_1.ExtendedInteraction(ctx);
            },
            message: (ctx) => {
                return new ExtendedResponse_1.ExtendedMessage(ctx);
            },
            embed: (data) => {
                return new ExtendedEmbed_1.default(data);
            }
        };
    }
}
exports.default = Extensions;
//# sourceMappingURL=index.js.map