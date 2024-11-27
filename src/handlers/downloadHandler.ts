import * as fsExtra from 'fs-extra';
import * as path from 'path';
import downloadVideo from   '../utils/downloadVideo';
import convertToAudio from '../utils/convertVideoToAudio';
import TelegramBot from 'node-telegram-bot-api';

async function downloadHandler(message: TelegramBot.Message, bot: TelegramBot): Promise<void> {
    const chatId = message.chat.id;
    const youtubeUrl = message.text as string;
    bot.sendMessage(chatId, 'Your request is processing, please wait');

    const resolvedPath = path.resolve();
    const videoDir = 'downloads';
    const audioDir = 'downloads/audio';
    const videoPath = path.join(resolvedPath, videoDir, `video_${Date.now()}.mp4`);
    const audioPath = path.join(resolvedPath, audioDir, `audio_${Date.now()}.mp3`);

    try {
        await fsExtra.ensureDir(videoDir);
        await fsExtra.ensureDir(audioDir);

        await downloadVideo(videoPath, youtubeUrl);
        await convertToAudio(videoPath, audioPath);

        await bot.sendAudio(chatId, audioPath);

        console.log('Audio sent successfully!');
        await fsExtra.remove(videoPath);
        await fsExtra.remove(audioPath);

        console.log('Temporary files cleaned up.');
    } catch (error) {
        throw error;
    }
}

export default downloadHandler;
