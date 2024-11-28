import TelegramBot from "node-telegram-bot-api";
import {COMMANDS_RESPONSES} from "../../constants";

export default async function (chatId: number, bot: TelegramBot) {
    await bot.sendMessage(chatId, COMMANDS_RESPONSES.start);

}