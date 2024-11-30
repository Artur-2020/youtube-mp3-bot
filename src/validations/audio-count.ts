import {ValidationError} from "../custom_exeptions";
import {RESPONSES} from "../constants";
import {StatesService} from "../services";
import {config} from '../config';

const {alreadyFiveVideos} = RESPONSES;
export default async function (chatId: number) {
    const count = await StatesService.getStatePropertyByChatId(chatId, 'generatedAudioCount');
    if (count && +count >= config.freeVideoCount) {
        throw new ValidationError(alreadyFiveVideos);
    }
}