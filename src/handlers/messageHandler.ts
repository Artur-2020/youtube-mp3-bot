import TelegramBot from 'node-telegram-bot-api';
import {Message} from "node-telegram-bot-api";
import {startHandler, audioHandler, otherHandler} from './commands';


export async function messageHandler({message, bot}: { message: Message, bot: TelegramBot }) {

    const {chat: {id: chatId}, text} = message;

    const responseText = text?.toLowerCase() || '';

    switch (responseText) {
        case '/start':
            await startHandler(chatId, bot)
            break;

        case '/audio':
            // Set state to expect a YouTube link
            await audioHandler(chatId, bot);
            break;

        case '/lyrics':
            // Reset user state
            break;

        default:
            await otherHandler({chatId, bot, text: text || ''});
            break;
    }
}
