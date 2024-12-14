import {COMMANDS_RESPONSES} from "../../constants";
import {CommandHandlerInput} from "../../interfaces";
import {StatesService} from "../../services";
import replaceConstantValues from '../../utils/changeConstantValue';

/**
 * Handler for the command info, send user generated video count
 * @param chatId
 * @param bot
 */
export default async function ({chatId, bot}: CommandHandlerInput) {
    const count = await StatesService.getStatePropertyByChatId(chatId, 'generatedAudioCount');
    const responseMessage = replaceConstantValues(COMMANDS_RESPONSES.info, {count: count as string})

    await bot.sendMessage(chatId, responseMessage, { parse_mode: 'Markdown', disable_web_page_preview: true });

}