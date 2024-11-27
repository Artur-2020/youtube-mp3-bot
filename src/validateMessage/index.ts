import { ValidationError } from '../custom_exeptions';
import ytdl from '@distube/ytdl-core';
import TelegramBot from 'node-telegram-bot-api';
import {Message} from "node-telegram-bot-api";



export function validateMessage({ message, bot }: { message: Message, bot: TelegramBot }) {
    const { chat: { id: chatId }, text } = message;

    console.log('chatId', chatId);
    console.log('text', text);

    if (!text || !ytdl.validateURL(text)) {
        throw new ValidationError('Please send a valid YouTube URL!');
    }
}
