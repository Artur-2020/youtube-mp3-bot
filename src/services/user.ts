import { UsersRepository } from '../repositories/index';
import {createUserDTO} from "../interfaces";

class UserService {
    private repository: UsersRepository;

    constructor(repository: UsersRepository) {
        this.repository = repository;
    }

    /**
     * Create user
     * @param data
     */

    async createUser(data: createUserDTO) {
        return await this.repository.create(data);
    }

    /**
     * Get User by chatid
     * @param chatId
     */
    async getUserById(chatId: number) {
        return await this.repository.findOne({chatId});
    }
}

// Exporting a reusable instance of UserService with a repository
const userRepository = new UsersRepository();

export default new UserService(userRepository);
