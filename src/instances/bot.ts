import TelegramBot from 'node-telegram-bot-api';

import {config} from "../config";

const BOT_TOKEN = config.botToken;
class BotSingleton {
    private static instance: BotSingleton | null = null;
    private bot: TelegramBot | null = null;

    private constructor() {
        if (BotSingleton.instance) {
            return BotSingleton.instance;
        }

        console.log('Creating a new Telegram bot instance...');
        this.bot = new TelegramBot(BOT_TOKEN, { polling: true });
        BotSingleton.instance = this;
    }

    public static getInstance(): BotSingleton {
        if (!BotSingleton.instance) {
            new BotSingleton();
        }
        // Make sure instance is not null here
        return BotSingleton.instance!;
    }

    public getBot(): TelegramBot {
        if (!this.bot) {
            throw new Error('Bot is not initialized');
        }
        return this.bot;
    }

    public async sendMessage(chatId: number, message: string): Promise<void> {
        try {
            console.log(`Sending message to chat ${chatId}: ${message}`);
            await this.bot?.sendMessage(chatId, message);
        } catch (error) {
            // Type 'unknown' assertion
            if (error instanceof Error) {
                console.error(`Failed to send message to chat ${chatId}:`, error.message);
            } else {
                console.error(`Failed to send message to chat ${chatId}:`, error);
            }
        }
    }
}

export const botInstance = BotSingleton.getInstance();
export const bot = botInstance.getBot();
