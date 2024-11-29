import {config} from '../config';

export const BOT_COMMANDS = [
    {command: '/start', description: 'Welcome'},
    {command: '/audio', description: 'Get audio of the video from youtube'},
    {command: '/info', description: 'Get info about generated audio'},
    {command: '/help', description: 'Get Help'}
];

const commandList = BOT_COMMANDS.map(command => command.command).join(', ');

export enum STATE_VALUES {
    ACTIVE = 'active',
    STARTED = 'started',
    WAITING_FOR_VIDEO = 'waiting_for_video'
}

export enum STATUSES {
    ACTIVE = 'active',
    STARTED = 'started',
    DOWNLOADING_VIDEO = 'downloading_video',
    CONVERT_TO_AUDIO = 'converting_audio',
    SENDING_TO_USER = 'sending',
    FINISHED = 'finished'
}

export const STATUS_TEXTS: Partial<Record<STATUSES, string>> = {
    [STATUSES.STARTED]: 'Starting the process please wait',
    [STATUSES.SENDING_TO_USER]: 'Sending audio to you',
    [STATUSES.FINISHED]: 'Process completed! Enjoy your audio. 🎵'
};


export const COMMANDS_RESPONSES = {
    start: 'Welcome to the bot! Use /audio to download audio',
    info: `✅ You have already generated ** {count} audio files**.\n\n` +
        `Max free limit is ${config.freeVideoCount}`,

    help: `📌 **Help Menu**\n\n` +
        `If you need assistance or have any questions, feel free to reach out to our admin directly:\n` +
        `[Contact Admin](https://t.me/Art_Sahakyan)\n\n` +
        `You can also use the available commands:\n` +
        `${commandList} \n` +
        `We're here to help! 😊`,
    audio: 'Please send a YouTube link, and I will convert it to audio.',
};
export const RESPONSES = {
    alreadyFiveVideos: '🎉 You already have 5 generated audio files! Keep enjoying the features of our bot. If you need help or have questions, feel free to use /help. 😊',
    somethingWentWrong: 'Something went wrong! Please try again later.',
    invalidYoutubeURL: 'Please send a valid YouTube URL!',
    enospcError: 'Server storage is full. Please try again later.',
    ffmpegError: 'Audio conversion failed. Please contact support.',
    invalidCommand: `Invalid command. Please choose one of the available commands: ${commandList}.`
};