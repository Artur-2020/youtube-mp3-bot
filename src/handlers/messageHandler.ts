import {
    startHandler,
    audioHandler,
    otherHandler,
    helpHandler,
    infoHelper
} from './commands';
import {MessageHandlerInput} from "../interfaces";
import {StatesService} from "../services";
import {STATE_VALUES} from "../constants";

/**
 * Function for handle messages from the user and check which type of answer to send
 * @param message
 * @param bot
 */
export async function messageHandler({message, bot}: MessageHandlerInput) {

    const {chat: {id: chatId}, text} = message;

    const responseText = text?.toLowerCase() || '';

    switch (responseText) {
        case '/start':
            await StatesService.updateState(chatId, {state: STATE_VALUES.ACTIVE});
            await startHandler({chatId, bot})
            break;

        case '/audio':
            await audioHandler({chatId, bot});
            break;

        case '/info':
            await StatesService.updateState(chatId, {state: STATE_VALUES.ACTIVE});
            await infoHelper({chatId, bot});
            break;

        case '/help':
            await StatesService.updateState(chatId, {state: STATE_VALUES.ACTIVE});
            await helpHandler({chatId, bot});
            break;
        default:
            await otherHandler({chatId, bot, text: text || ''});
            break;
    }
}
