import {
    startHandler,
    audioHandler,
    otherHandler,
    helpHandler,
    infoHelper
} from './commands';
import {MessageHandlerInput} from "../interfaces";


export async function messageHandler({message, bot}: MessageHandlerInput) {

    const {chat: {id: chatId}, text} = message;

    const responseText = text?.toLowerCase() || '';

    switch (responseText) {
        case '/start':
            await startHandler({chatId, bot})
            break;

        case '/audio':
            await audioHandler({chatId, bot});
            break;

        case '/info':
            await infoHelper({chatId, bot});
            break;

        case '/help':
            await helpHandler({chatId, bot});
            break;
        default:
            await otherHandler({chatId, bot, text: text || ''});
            break;
    }
}
