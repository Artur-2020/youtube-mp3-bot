import { StatesRepository } from '../repositories/index';
import {createStateDTO} from "../interfaces";

class StateService {
    private repository: StatesRepository;

    constructor(repository: StatesRepository) {
        this.repository = repository;
    }

    async createState(data: createStateDTO) {
        return await this.repository.createState(data);
    }

    async getStateByChatId(chatId: number) {
        return await this.repository.getStateByChatId(chatId);
    }

    async getAllStates() {
        return await this.repository.getAllStates();
    }

    async updateState(id: number, state: string) {
        return await this.repository.updateState(id, state);
    }

    async deleteState(id: number) {
        return await this.repository.deleteState(id);
    }

    async getStateValueByChatId(chatId: number) {
        const state = await this.repository.getStateByChatId(chatId);
        return state?.state;
    }
}

// Exporting a reusable instance of StateService with a repository
const stateRepository = new StatesRepository();

export default new StateService(stateRepository);
