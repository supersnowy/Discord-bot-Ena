"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const chalk_1 = __importDefault(require("chalk"));
const { combine, printf } = winston_1.format;
const labelToColor = {
    INFO: `${chalk_1.default.cyanBright(`{{label}}`)}`,
    WARN: `${chalk_1.default.yellowBright(`{{label}}`)}`,
    ERROR: `${chalk_1.default.redBright(`{{label}}`)}`,
    HTTP: `${chalk_1.default.greenBright(`{{label}}`)}`,
    VERBOSE: `${chalk_1.default.blueBright(`{{label}}`)}`,
    SILLY: `${chalk_1.default.yellowBright(`{{label}}`)}`,
    DEBUG: `${chalk_1.default.cyanBright(`{{label}}`)}`,
};
const myFormat = printf(({ level, message, label, src, timestamp }) => {
    return `${chalk_1.default.gray(`${src} ~`)} [${labelToColor[label].replace(`{{label}}`, label)}] (${timestamp}) ${message}`;
});
const myCustomLevels = {
    levels: {
        error: 0,
        warn: 1,
        info: 2,
        http: 3,
        verbose: 4,
        debug: 5,
        silly: 6,
    },
    colours: {
        error: `bold red`,
        warn: `bold yellow`,
        info: `bold blue`,
        http: `bold white`,
        verbose: `bold green`,
        debug: `bold cyan`,
    },
};
(0, winston_1.addColors)(myCustomLevels.colours);
exports.default = (0, winston_1.createLogger)({
    levels: myCustomLevels.levels,
    format: combine(winston_1.format.colorize(), winston_1.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), myFormat),
    transports: [new winston_1.transports.Console()],
});
//# sourceMappingURL=Logger.js.map