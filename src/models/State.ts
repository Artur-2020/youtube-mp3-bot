import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../db';
import {StateAttributes} from '../interfaces';
// Define attributes interface


// Define optional attributes for model creation
interface StateCreationAttributes extends Optional<StateAttributes, 'id'> {}

// Define the State model
export default class State extends Model<StateAttributes, StateCreationAttributes> implements StateAttributes {
    public id!: number;
    public chatId!: number;
    public state!: string;
    public userId!: number;
    public username!: string;
    public full_name!: string;
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
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true
        },
        generatedAudioCount: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        username: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true
        },
        full_name: {
          type: DataTypes.STRING,
          allowNull: true
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
