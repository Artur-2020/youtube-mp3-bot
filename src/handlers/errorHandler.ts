import {ValidationError} from '../custom_exeptions';
import {getBotInstance} from "../instances/bot";
import {RESPONSES} from "../constants";

const {somethingWentWrong, enospcError, ffmpegError} = RESPONSES;

/**
 * Global error handling function
 * @param chatId
 * @param error
 */
export async function handleError(chatId: number, error: Error) {
    const bot = await getBotInstance();
    console.error('Error:', error);

    let text = somethingWentWrong;
    if (error instanceof ValidationError) {
        text = error.message;
    } else if (error.message.includes('ENOSPC')) {
        text = enospcError;
    } else if (error.message.includes('ffmpeg')) {
        text = ffmpegError;
    }

    await bot.sendMessage(chatId, text);
}
