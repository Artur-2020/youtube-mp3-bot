import {ValidationError} from "../custom_exeptions";
import {RESPONSES} from "../constants";
import {StatesService} from "../services";
import {config} from '../config';

const {alreadyMaxCount} = RESPONSES;

/**
 * Check limit of the user for generating audio
 * @param chatId
 */
export default async function (chatId: number) {
    const count = await StatesService.getStatePropertyByChatId(chatId, 'generatedAudioCount');
    if (count && +count >= config.freeVideoCount) {
        throw new ValidationError(alreadyMaxCount);
    }
}