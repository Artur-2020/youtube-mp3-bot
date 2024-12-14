import {LogsRepository } from '../repositories/index';
import {createLogDTO} from "../interfaces";

class LogsService {
    private repository: LogsRepository;

    constructor(repository: LogsRepository) {
        this.repository = repository;
    }

    /**
     * Create user
     * @param data
     */

    async LOG(data: createLogDTO) {
        return await this.repository.create(data);
    }
}

// Exporting a reusable instance of LogsService with a repository
const logsRepository = new LogsRepository();

export default new LogsService(logsRepository);
