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

    async updateState(id: number, data: Partial<createStateDTO>) {
        return await this.repository.updateState(id, data);
    }

    async deleteState(id: number) {
        return await this.repository.deleteState(id);
    }

    async getStatePropertyByChatId(chatId: number, property: keyof createStateDTO) {
        const state = await this.repository.getStateByChatId(chatId);
        if (!state) return null;
        return state[property];
    }
}

// Exporting a reusable instance of StateService with a repository
const stateRepository = new StatesRepository();

export default new StateService(stateRepository);
