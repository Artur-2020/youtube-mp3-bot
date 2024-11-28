import TelegramBot from 'node-telegram-bot-api';
import { config } from '../config';
import {BOT_COMMANDS} from "../constants";

const BOT_TOKEN = config.botToken;

export class BotSingleton {
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

    private async initializeCommands(): Promise<void> {
        try {
            console.log('Setting bot commands...');
            await this.bot?.setMyCommands(BOT_COMMANDS);
            console.log('Bot commands set successfully.');
        } catch (error) {
            console.error('Failed to set bot commands:', error);
        }
    }

    public static async getInstance(): Promise<BotSingleton> {
        if (!BotSingleton.instance) {
            const instance = new BotSingleton();
            await instance.initializeCommands(); // Initialize bot commands
            BotSingleton.instance = instance;
        }
        return BotSingleton.instance;
    }

    public getBot(): TelegramBot {
        if (!this.bot) {
            throw new Error('Bot is not initialized');
        }
        return this.bot;
    }
}
