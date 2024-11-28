import TelegramBot from "node-telegram-bot-api";
import {StatesService} from "../../services";
import {COMMANDS_RESPONSES, STATE_VALUES} from "../../constants";

export default async function (chatId: number, bot: TelegramBot) {
    await StatesService.updateState(chatId, STATE_VALUES.WAITING_FOR_VIDEO);
    await bot.sendMessage(chatId, COMMANDS_RESPONSES.audio);

}