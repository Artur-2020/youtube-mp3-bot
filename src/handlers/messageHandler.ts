import {startHandler, audioHandler, otherHandler} from './commands';
import {MessageHandlerInput} from "../interfaces";


export async function messageHandler({message, bot}: MessageHandlerInput) {

    const {chat: {id: chatId}, text} = message;

    const responseText = text?.toLowerCase() || '';

    switch (responseText) {
        case '/start':
            await startHandler({chatId, bot})
            break;

        case '/audio':
            // Set state to expect a YouTube link
            await audioHandler({chatId, bot});
            break;

        case '/lyrics':
            // Reset user state
            break;

        default:
            await otherHandler({chatId, bot, text: text || ''});
            break;
    }
}
