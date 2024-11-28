import TelegramBot from "node-telegram-bot-api";
import {youtubeLinkValidator} from '../../validations/index'
import {StatesService} from "../../services";
import {STATE_VALUES, RESPONSES} from "../../constants";
import downloadHandler from "../downloadHandler";
const {invalidCommand} = RESPONSES;
export default async function ({chatId, text, bot}: { chatId: number, bot: TelegramBot, text: string }) {
    const currentState = await StatesService.getStateValueByChatId(chatId);

    switch (currentState) {
        case STATE_VALUES.WAITING_FOR_VIDEO:
            youtubeLinkValidator(text);
            // await downloadHandler(text, chatId);
            break;
        default :
            await bot.sendMessage(chatId, invalidCommand);

    }
}