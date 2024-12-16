import {LogsService} from '../services';
import {createLogDTO} from "../interfaces";

/**
 * Function for create beautiful log
 * @param data
 */
export default async function LOG(data: createLogDTO) {
    await LogsService.LOG(data);

}