import {LogsService} from '../services';
import {createLogDTO} from "../interfaces";

/**
 * Function for create beautiful log
 * @param data
 */
export default function LOG(data: createLogDTO) {
    LogsService.LOG(data);

}