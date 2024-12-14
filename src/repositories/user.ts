import { BaseRepository } from './base';
import { UsersModel } from '../models/index';

export default class UserRepository extends BaseRepository<UsersModel> {
    constructor() {
        super(UsersModel);
    }

}
