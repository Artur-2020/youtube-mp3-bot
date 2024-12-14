import {SendAudioInput} from "../interfaces";

/**
 * Send generated audio to user
 * @param info
 * @param bot
 * @param chatId
 * @param audioPath
 */
export default async function downloadVideo({info, bot, chatId, audioPath}: SendAudioInput): Promise<void> {
    try {
        const {title, author, duration} = info;
        await bot.sendAudio(chatId, audioPath, {
            title,
            performer: author,
            duration: duration as number,
        });
    } catch (e) {
        console.error('Error during send to the user:', e);
        throw e;
    }
}
