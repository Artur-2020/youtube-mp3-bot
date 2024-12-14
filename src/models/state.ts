import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../db';
import {StateAttributes} from '../interfaces';
import User from "./user";
// Define attributes interface


// Define optional attributes for model creation
interface StateCreationAttributes extends Optional<StateAttributes, 'id'> {}

// Define the State model
export default class State extends Model<StateAttributes, StateCreationAttributes> implements StateAttributes {
    public id!: number;
    public state!: string;
    public chatId!: number;
    public generatedAudioCount!: number;
    public status!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

// Initialize the model
State.init(
    {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
        },
        chatId: {
            type: DataTypes.BIGINT,
            unique: true
        },
        generatedAudioCount: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        tableName: 'states',
        modelName: 'State',
        timestamps: true
    }
);