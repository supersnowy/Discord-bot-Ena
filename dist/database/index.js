"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const ena_1 = __importDefault(require("../ena"));
exports.default = (mongo_uri) => {
    mongoose_1.default.connect(mongo_uri).then(() => {
        ena_1.default.logger.info(`Connected to database`, { label: "INFO", src: "src/database" });
    }).catch((err) => {
        ena_1.default.logger.error(`Failed to connect to database`, { label: "ERROR", src: "src/databse" });
    });
};
//# sourceMappingURL=index.js.map