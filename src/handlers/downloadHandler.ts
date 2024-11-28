import downloadVideo from   '../utils/downloadVideo';
import convertToAudio from '../utils/convertVideoToAudio';
import {getBotInstance} from '../instances/bot';
import {ensureAudioVideoDirsExists, getVideoPath, getAudioPath, removeTemporaryFiles} from '../utils/getPaths'
import {StatesService} from "../services";
import {STATE_VALUES} from "../constants";
async function downloadHandler(youtubeUrl: string, chatId: number): Promise<void> {
    const bot = await getBotInstance();

    try {
        await ensureAudioVideoDirsExists();

        const audioPath = getAudioPath();
        const videoPath = getVideoPath();

        await downloadVideo(videoPath, youtubeUrl);
        await convertToAudio(videoPath, audioPath);

        await bot.sendAudio(chatId, audioPath);

        console.log('Audio sent successfully!');

        await removeTemporaryFiles({audioPath, videoPath});

        await StatesService.updateState(chatId, STATE_VALUES.ACTIVE);
    } catch (error) {
        throw error;
    }
}

export default downloadHandler;
