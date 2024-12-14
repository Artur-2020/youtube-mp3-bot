import {youtubeLinkValidator, audioCountValidator} from '../../validations/index'
import {StatesService} from "../../services";
import {STATE_VALUES, RESPONSES} from "../../constants";
import downloadHandler from "../downloadHandler";
import {OtherCommandInput} from "../../interfaces";

const {invalidCommand} = RESPONSES;

/**
 * Handler for the command other, making validations for YouTube link if user waiting for video and handle downloading
 * @param chatId
 * @param bot
 * @param text
 */
export default async function ({chatId, bot, text}: OtherCommandInput) {
    const currentState = await StatesService.getStatePropertyByChatId(chatId, 'state');

    switch (currentState) {
        case STATE_VALUES.WAITING_FOR_VIDEO:
            youtubeLinkValidator(text);
            await audioCountValidator(chatId);
            await downloadHandler(text, chatId);
            break;
        default :
            await bot.sendMessage(chatId, invalidCommand);
    }
}