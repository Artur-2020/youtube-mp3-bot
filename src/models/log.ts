// import { DataTypes, Model, Optional } from 'sequelize';
// import { sequelize } from '../db';
// import {StateAttributes} from '../interfaces';
// // Define attributes interface
//
//
// // Define optional attributes for model creation
// interface StateCreationAttributes extends Optional<StateAttributes, 'id'> {}
//
// // Define the State model
// export default class Log extends Model<LogAttributes, LogCreationAttributes> implements LogAttributes {
//     public id!: number;
//     public chatId!: number;
//     public userId!: number;
//     public full_name!: string;
//     public readonly createdAt!: Date;
//     public readonly updatedAt!: Date;
// }
//
// // Initialize the model
// State.init(
//     {
//         id: {
//             type: DataTypes.BIGINT,
//             autoIncrement: true,
//             primaryKey: true,
//         },
//         chatId: {
//             type: DataTypes.BIGINT,
//             allowNull: false,
//             unique: true
//         },
//         userId: {
//             type: DataTypes.BIGINT,
//             allowNull: false,
//             unique: true
//         },
//         username: {
//             type: DataTypes.STRING,
//             allowNull: true,
//             unique: true
//         },
//     {
//         sequelize,
//         tableName: 'logs',
//         modelName: 'Log',
//         timestamps: true
//     }
// );
