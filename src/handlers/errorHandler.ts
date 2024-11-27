import TelegramBot from 'node-telegram-bot-api';
import { ValidationError } from '../custom_exeptions/index';

export function handleError(chatId: number, bot: TelegramBot, error: Error) {
    console.error('Error:', error);

    if (error instanceof ValidationError) {
        bot.sendMessage(chatId, error.message);
    } else if (error.message.includes('ENOSPC')) {
        bot.sendMessage(chatId, 'Server storage is full. Please try again later.');
    } else if (error.message.includes('ffmpeg')) {
        bot.sendMessage(chatId, 'Audio conversion failed. Please contact support.');
    } else {
        bot.sendMessage(chatId, 'Something went wrong! Please try again later.');
    }
}
