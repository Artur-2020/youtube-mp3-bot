import TelegramBot from "node-telegram-bot-api";
import {COMMANDS_RESPONSES} from "../../constants";
import {CommandHandlerInput} from "../../interfaces";

/**
 * Handler for the command /help
 * @param chatId
 * @param bot
 */
export default async function ({chatId, bot}: CommandHandlerInput) {
    await bot.sendMessage(chatId, COMMANDS_RESPONSES.help);

}