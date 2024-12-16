import TelegramBot, {Message} from "node-telegram-bot-api";
import exp from "node:constants";
import {STATUSES} from "../constants";
import {Stream} from "node:stream";
import {Author} from "@distube/ytdl-core";
interface DBAttributes {
    id: number;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface createStateDTO {
    state: string;
    chatId: number
    status: string;
    generatedAudioCount: number
}

export interface StateAttributes extends createStateDTO, DBAttributes {}

export interface createUserDTO {
    chatId: number;
    username?: string | null;
    full_name?: string | null;
    userId: number
}

export interface createLogDTO {
    chatId: number;
    message: string;
    type: string;
}

export interface LogAttributes extends createLogDTO, DBAttributes {}
export interface UserAttributes extends createUserDTO, Omit<DBAttributes, 'id'> {}

export interface UpdateStateStatus {
    bot: TelegramBot;
    chatId: number;
    status: STATUSES;
}


export interface CommandHandlerInput {
    chatId: number;
    bot: TelegramBot;
}

export interface OtherCommandInput extends CommandHandlerInput {
    text: string;
}


export interface MessageHandlerInput {
    message: Message,
    bot: TelegramBot
}

export interface VideoInfo {
    author: Author;
    title: string;
    duration?: string | number
}


export interface SendAudioInput {
    info: VideoInfo;
    bot: TelegramBot;
    chatId: number;
    audio: Stream;
}