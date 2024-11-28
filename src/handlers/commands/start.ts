import TelegramBot from "node-telegram-bot-api";
import {COMMANDS_RESPONSES} from "../../constants";
import {CommandHandlerInput} from "../../interfaces";

export default async function ({chatId, bot}: CommandHandlerInput) {
    await bot.sendMessage(chatId, COMMANDS_RESPONSES.start);

}