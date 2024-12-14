import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../db';
import {UserAttributes} from '../interfaces';
import State from "./state";
// Define attributes interface


// Define optional attributes for model creation
interface UserCreationAttributes extends UserAttributes {}

// Define the State model
export default class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
    public chatId!: number;
    public userId!: number;
    public username!: string;
    public full_name!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

// Initialize the model
User.init(
    {
        chatId: {
            primaryKey: true,
            type: DataTypes.BIGINT,
            allowNull: false,
            unique: true
        },
        userId: {
            type: DataTypes.BIGINT,
            allowNull: false,
            unique: true
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
    },
    {
        sequelize,
        tableName: 'users',
        modelName: 'User',
        timestamps: true
    }
);
User.hasOne(State, {
    foreignKey: 'chatId',
    onDelete: 'CASCADE',
});

State.belongsTo(User, {
    foreignKey: 'chatId',
});