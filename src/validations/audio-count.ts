import {ValidationError} from "../custom_exeptions";
import ytdl from "@distube/ytdl-core";
import {RESPONSES} from "../constants";
import {StatesService} from "../services";

const {alreadyFiveVideos} = RESPONSES;
export default async function (chatId: number) {
    const count = await StatesService.getStatePropertyByChatId(chatId, 'generatedAudioCount');
    if (count && +count >= 5) {
        throw new ValidationError(alreadyFiveVideos);
    }
}