import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../db';
import {StateAttributes, LogAttributes} from '../interfaces';
import User from "./user";


interface LogCreationAttributes extends Optional<LogAttributes, 'id'> {}

export default class Log extends Model<LogAttributes, LogCreationAttributes> implements LogAttributes {
    public id!: number
    public chatId!: number;
    public type!: string;
    public message!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

// Initialize the model
Log.init(
    {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
        },
        chatId: {
            type: DataTypes.BIGINT,
            allowNull: false,
            unique: false
        },

        type: {
            type: DataTypes.STRING
        },
        message: {
            type: DataTypes.STRING
        }
    },
    {
        sequelize,
        tableName: 'logs',
        modelName: 'Log',
        timestamps: true
    }
);
User.hasMany(Log, {
    foreignKey: 'chatId',
    onDelete: 'CASCADE',
});

Log.belongsTo(User, {
    foreignKey: 'chatId',
});