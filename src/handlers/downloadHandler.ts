import downloadVideo from '../utils/downloadVideo';
import convertToAudio from '../utils/convertVideoToAudio';
import {getBotInstance} from '../instances/bot';
import {ensureAudioVideoDirsExists, getVideoPath, getAudioPath} from '../utils/getPaths'
import {StatesService} from "../services";
import {STATE_VALUES, STATUSES} from "../constants";
import removeTemporaryFiles from '../utils/removeTemproraryFiles';
import updateProcessStatus from "../utils/updateProcessStatus";
import sendAudio from '../utils/sendAudioToUser';

async function downloadHandler(youtubeUrl: string, chatId: number): Promise<void> {
    const bot = await getBotInstance();

    try {
        console.log(STATUSES.STARTED);
        await updateProcessStatus({bot, chatId, status: STATUSES.STARTED});

        await ensureAudioVideoDirsExists();
        const videoPath = getVideoPath();

        console.log(STATUSES.DOWNLOADING_VIDEO);
        await updateProcessStatus({bot, chatId, status: STATUSES.DOWNLOADING_VIDEO});
        const videoInfo = await downloadVideo(videoPath, youtubeUrl);

        const {title, author} = videoInfo;
        const audioPath = getAudioPath({title, author});

        console.log(STATUSES.CONVERT_TO_AUDIO);
        await updateProcessStatus({bot, chatId, status: STATUSES.CONVERT_TO_AUDIO});
        await convertToAudio(videoPath, audioPath);

        console.log(STATUSES.SENDING_TO_USER);
        await updateProcessStatus({bot, chatId, status: STATUSES.SENDING_TO_USER});


        await sendAudio({info: videoInfo, bot, chatId, audioPath });

        console.log(STATUSES.FINISHED);
        await updateProcessStatus({chatId, bot, status: STATUSES.FINISHED});
        await StatesService.updateState(chatId, {state: STATE_VALUES.ACTIVE});

        await StatesService.incrementGeneratedVideoCount(chatId);
        await removeTemporaryFiles({audioPath, videoPath});
    } catch (error) {
        throw error;
    }
}

export default downloadHandler;
