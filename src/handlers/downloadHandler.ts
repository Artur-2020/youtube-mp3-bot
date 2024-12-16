import audioProcess from '../utils/audioProcess';
import {getBotInstance} from '../instances/bot';
import {StatesService} from "../services";
import {STATE_VALUES, STATUSES} from "../constants";
import updateProcessStatus from "../utils/updateProcessStatus";

/**
 * Downloading the video from YouTube22 converting to audio and send to user with managing of the statuses and states
 * @param youtubeUrl
 * @param chatId
 */
async function downloadHandler(youtubeUrl: string, chatId: number): Promise<void> {
    const bot = await getBotInstance();

    try {
        console.log(STATUSES.STARTED);
        await updateProcessStatus({bot, chatId, status: STATUSES.STARTED});

        console.log(STATUSES.DOWNLOADING_VIDEO);
        await updateProcessStatus({bot, chatId, status: STATUSES.DOWNLOADING_VIDEO});
        await audioProcess(youtubeUrl, bot, chatId);

        console.log(STATUSES.FINISHED);
        await StatesService.updateState(chatId, {state: STATE_VALUES.ACTIVE});

        await StatesService.incrementGeneratedVideoCount(chatId);
    } catch (error) {
        throw error;
    }
}

export default downloadHandler;
