import {createStateDTO, UpdateStateStatus} from "../interfaces";
import {STATUS_TEXTS} from "../constants";
import {StatesService} from "../services";

export default async function ({bot, chatId, status}: UpdateStateStatus) {

    const statusText = STATUS_TEXTS[status];

    const dataForUpdate: Partial<createStateDTO> = {
        status
    };
    if (statusText) {
        await bot.sendMessage(chatId, statusText);
    }

    await StatesService.updateState(chatId, dataForUpdate);
}