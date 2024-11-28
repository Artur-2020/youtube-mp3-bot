import {BotSingleton} from './bot_type';
import TelegramBot from "node-telegram-bot-api";

let botInstance: BotSingleton | null = null;

export const getBotInstance = async (): Promise<TelegramBot> => {
    if (!botInstance) {
        botInstance = await BotSingleton.getInstance();
    }
    return botInstance.getBot();
};
