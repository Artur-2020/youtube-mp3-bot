import TelegramBot from "node-telegram-bot-api";
import {StatesService} from "../../services";
import {COMMANDS_RESPONSES, STATE_VALUES, STATUSES} from "../../constants";
import {CommandHandlerInput} from "../../interfaces";

/**
 * Handler for the command /audio
 * @param chatId
 * @param bot
 */
export default async function ({chatId, bot}: CommandHandlerInput) {
    const res = await StatesService.updateState(chatId, {
        state: STATE_VALUES.WAITING_FOR_VIDEO,
        status: STATUSES.ACTIVE
    }
    );

    await bot.sendMessage(chatId, COMMANDS_RESPONSES.audio);

}