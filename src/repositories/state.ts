import { BaseRepository } from './base';
import { StatesModel } from '../models/index';

export default class StateRepository extends BaseRepository<StatesModel> {
    constructor() {
        super(StatesModel);
    }

    async getStateByChatId(id: number, attributes?: string[]): Promise<StatesModel | null> {
        return await this.findOne({ chatId: id }, { attributes });
    }

    async incrementGeneratedVideoCount(id: number): Promise<void> {
        await this.model.increment('generatedAudioCount', {
            by: 1,
            where: { chatId: id },
        });
    }
}
