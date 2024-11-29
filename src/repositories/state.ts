import {StatesModel} from '../models/index';
import {createStateDTO} from '../interfaces';

export default class StateRepository {
    async createState(data: createStateDTO): Promise<StatesModel> {
        return await StatesModel.create(data);
    }

    async getStateByChatId(id: number, attributes?: string[]): Promise<StatesModel | null> {
        return await StatesModel.findOne({
            where: {chatId: id},
            attributes: attributes || undefined,
        });
    }

    async getAllStates(): Promise<StatesModel[]> {
        return await StatesModel.findAll();
    }

    async updateState(id: number, data: Partial<createStateDTO>): Promise<boolean> {
        const [updatedCount] = await StatesModel.update(data, {
            where: {chatId: id},
            returning: true,
        });

        return !(updatedCount === 0);
    }

    async deleteState(id: number): Promise<boolean> {
        const deletedCount = await StatesModel.destroy({where: {id}});
        return deletedCount > 0;
    }


    async incrementGeneratedVideoCount(id: number) {
        return await StatesModel.increment('generatedAudioCount', {
            by: 1,
            where: {
                chatId: id
            }
        });
    }
}
