import {ValidationError} from '../custom_exeptions';
import {getBotInstance} from "../instances/bot";
import {RESPONSES} from "../constants";
import LOG from '../utils/log';

const {somethingWentWrong, enospcError, ffmpegError} = RESPONSES;

/**
 * Global error handling function
 * @param chatId
 * @param error
 */
export async function handleError(chatId: number, error: Error) {
    let type = 'error';
    const bot = await getBotInstance();
    console.error('Error:', error);

    let text = somethingWentWrong;
    if (error instanceof ValidationError) {
        type = 'validation_error';
        text = error.message;
    } else if (error.message.includes('ENOSPC')) {
        type = 'enospc_error';
        text = enospcError;
    } else if (error.message.includes('ffmpeg')) {
        type = 'ffmpeg_error';
        text = ffmpegError;
    }


    LOG({
        type,
        message: error.message,
        chatId
    });
    await bot.sendMessage(chatId, text);
}
