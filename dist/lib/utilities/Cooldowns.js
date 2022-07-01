"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.msToTime = void 0;
const Cooldowns_1 = __importDefault(require("../../database/schemas/Cooldowns"));
const ena_1 = __importDefault(require("../../ena"));
function msToTime(ms) {
    let str = "";
    let seconds = (ms / 1000).toFixed(1);
    let minutes = (ms / (1000 * 60)).toFixed(1);
    let hours = (ms / (1000 * 60 * 60)).toFixed(1);
    let days = (ms / (1000 * 60 * 60 * 24)).toFixed(1);
    let weeks = (ms / (1000 * 60 * 60 * 24 * 7)).toFixed(1);
    let months = (ms / (1000 * 60 * 60 * 24 * 30)).toFixed(1);
    if (parseInt(seconds) < 60)
        str = seconds + " second(s)";
    else if (parseInt(minutes) < 60)
        str = minutes + " minute(s) " + str;
    else if (parseInt(hours) < 24)
        str = hours + " hour(s) " + str;
    else if (parseInt(days) < 7)
        str = days + " day(s) " + str;
    if (parseInt(days) > 7)
        str = weeks + " week(s) " + str;
    else if (parseInt(days) > 30)
        str = months + " month(s) " + str;
    return str;
}
exports.msToTime = msToTime;
exports.default = async (commandName, user, command, commandExecuteableOptions, context, type) => {
    const cooldown = await Cooldowns_1.default.findOne({ user_id: user.id, commandName });
    //@ts-ignore
    const commandExecute = () => command.execute(commandExecuteableOptions);
    if (!command.cooldown)
        return commandExecute();
    if (cooldown) {
        if (cooldown.timeRemaining > Date.now()) {
            const difference = Math.floor(cooldown.timeRemaining - Date.now());
            let msg = ena_1.default.extensions.message(context);
            if (type === "slash") {
                msg = ena_1.default.extensions.interaction(context);
            }
            msg.reply({ content: `<@${user.id}>, Slowdown please wait another **${msToTime(difference)}**` });
        }
        else if (cooldown.timeRemaining <= Date.now()) {
            await Cooldowns_1.default.findOneAndUpdate({
                commandName: commandName,
                user_id: user.id,
                timeRemaining: Date.now() + command.cooldown * 1000,
            });
            commandExecute();
        }
    }
    else {
        await Cooldowns_1.default.create({
            commandName: commandName,
            timeRemaining: Date.now() + command.cooldown * 1000,
            user_id: user.id
        });
        commandExecute();
    }
};
//# sourceMappingURL=Cooldowns.js.map