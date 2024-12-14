import {StatesService} from '../services/index'
import {STATE_VALUES, STATUSES} from "../constants";
import {Message, User} from "node-telegram-bot-api";

/**
 * Create user state if not exists
 * @param message
 */
export default async function (message: Message) {
    const {id: chatId} = message.chat;

    const existsState = await StatesService.getStateByChatId(chatId);

    if (existsState) return;
        const {id: userId, username, last_name, first_name} = message.from as User;
        const fullName = `${first_name}  ${last_name}`;
        const newData = {
            chatId,
            state: STATE_VALUES.ACTIVE,
            status: STATUSES.ACTIVE,
            username: username || null,
            userId,
            full_name: fullName,
            generatedAudioCount: 0
        };

        await StatesService.createState(newData);

}