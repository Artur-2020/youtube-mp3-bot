import {SendAudioInput} from "../interfaces";

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
