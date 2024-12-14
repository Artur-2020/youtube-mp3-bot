import { BaseRepository } from './base';
import { LogsModel } from '../models/index';

export default class UserRepository extends BaseRepository<LogsModel> {
    constructor() {
        super(LogsModel);
    }

}
