"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const ExtendedClient_1 = __importDefault(require("./lib/extensions/ExtendedClient"));
const client = new ExtendedClient_1.default();
exports.default = client;
//# sourceMappingURL=ena.js.map