import { StatesModel } from '../models/index';
import { createStateDTO } from '../interfaces';
export default class StateRepository {
    async createState(data: createStateDTO): Promise<StatesModel> {
        return await StatesModel.create(data);
    }

    async getStateByChatId(id: number): Promise<StatesModel | null> {
        return await StatesModel.findOne({where: {chatId: id}});
    }

    async getAllStates(): Promise<StatesModel[]> {
        return await StatesModel.findAll();
    }

    async updateState(id: number, stateValue: string): Promise<StatesModel | null> {
        const state = await StatesModel.findOne({where: {chatId: id}});
        if (!state) return null;

        state.state = stateValue;
        await state.save();
        return state;
    }

    async deleteState(id: number): Promise<boolean> {
        const deletedCount = await StatesModel.destroy({ where: { id } });
        return deletedCount > 0;
    }
}
