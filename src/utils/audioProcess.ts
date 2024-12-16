import ytdl from '@distube/ytdl-core';
import TelegramBot from "node-telegram-bot-api";
import sendAudioToUser from './sendAudioToUser';
/**
 * Download video from YouTube
 * @param youtubeUrl
 * @param bot
 * @param chatId
 */

export default async function audioProcess(youtubeUrl: string, bot: TelegramBot, chatId: number): Promise<void> {
    try {
        // Fetch video information
        youtubeUrl = 'akskajk';
        const videoInfo = await ytdl.getInfo(youtubeUrl);
        const { title, lengthSeconds, author } = videoInfo.videoDetails;

        const info = {title, duration: lengthSeconds, author};

        const audioStream = ytdl(youtubeUrl, { quality: 'highestaudio', filter: 'audioonly' });

        await sendAudioToUser({info, audio: audioStream, bot, chatId});

    } catch (e) {
        console.error('Error during video download:', e);
        throw e;
    }
}
