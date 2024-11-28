import {getBotInstance} from './instances/bot';
import {messageHandler} from './handlers/messageHandler';
import {Message} from "node-telegram-bot-api";
import downloadHandler from './handlers/downloadHandler';
import {handleError} from './handlers/errorHandler';
import {ValidationError} from "./custom_exeptions";
import {initializeDatabase} from './db';
import createUserState from "./utils/createUserState";

async function main() {
    const bot = await getBotInstance();

    bot.on('message', async (msg: Message) => {
        const chatId = msg.chat.id;

        try {
            await createUserState(msg);
            await messageHandler({message: msg, bot});


            //@ts-ignore
        } catch (error: Error | ValidationError) {
            handleError(chatId, error);
        }
    });
}


(async function () {
    await initializeDatabase();
    await main();
})()
