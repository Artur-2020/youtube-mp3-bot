import { StatesRepository } from '../repositories/index';
import {createStateDTO} from "../interfaces";

class StateService {
    private repository: StatesRepository;

    constructor(repository: StatesRepository) {
        this.repository = repository;
    }

    /**
     * Create state data
     * @param data
     */

    async createState(data: createStateDTO) {
        return await this.repository.create(data);
    }

    /**
     * Get state by chatid
     * @param chatId
     */
    async getStateByChatId(chatId: number) {
        return await this.repository.getStateByChatId(chatId);
    }

    /**
     * Update state by chatId
     * @param id
     * @param data
     */
    async updateState(id: number, data: Partial<createStateDTO>) {
        return await this.repository.update({chatId: id}, data);
    }

    /**
     * Get specific property from state like status or state
     * @param chatId
     * @param property
     */
    async getStatePropertyByChatId(chatId: number, property: keyof createStateDTO) {
        const state = await this.repository.getStateByChatId(chatId, [property]);
        if (!state) return null;
        return state[property];

    }

    /**
     * Increment generated video count for the chat
     * @param id
     */
    async incrementGeneratedVideoCount(id: number) {
        return await this.repository.incrementGeneratedVideoCount(id);
    }
}

// Exporting a reusable instance of StateService with a repository
const stateRepository = new StatesRepository();

export default new StateService(stateRepository);
