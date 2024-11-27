import { bot } from './instances/bot';
import { validateMessage } from './validateMessage';
import {Message} from "node-telegram-bot-api";
import downloadHandler from './handlers/downloadHandler';
import { handleError } from './handlers/errorHandler';
import {ValidationError} from "./custom_exeptions";



bot.on('message', async (msg: Message) => {
    const chatId = msg.chat.id;

    try {
        validateMessage({ message: msg, bot });
        await downloadHandler(msg, bot);
        //@ts-ignore
    } catch (error: Error | ValidationError) {
            handleError(chatId, bot, error);
    }
});
