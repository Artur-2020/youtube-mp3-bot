import {
    Model,
    ModelStatic,
    WhereOptions,
    FindOptions,
    UpdateOptions,
} from 'sequelize';

export class BaseRepository<T extends Model> {
    protected model: ModelStatic<T>;

    constructor(model: ModelStatic<T>) {
        this.model = model;
    }

    async create(data: T["_creationAttributes"]): Promise<T> {
        return await this.model.create(data);
    }

    async findOne(where: WhereOptions, options?: FindOptions): Promise<T | null> {
        return await this.model.findOne({ where, ...options });
    }

    async findAll(options?: FindOptions): Promise<T[]> {
        return await this.model.findAll(options);
    }

    async update(where: WhereOptions, data: Partial<T["_creationAttributes"]>): Promise<boolean> {
        const [updatedCount] = await this.model.update(data, {
            where,
            returning: true
        });
        return updatedCount > 0;
    }

    async delete(where: WhereOptions): Promise<boolean> {
        const deletedCount = await this.model.destroy({ where });
        return deletedCount > 0;
    }
}
