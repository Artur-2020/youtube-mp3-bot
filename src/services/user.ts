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

}

// Exporting a reusable instance of UserService with a repository
const userRepository = new UsersRepository();

export default new UserService(userRepository);
