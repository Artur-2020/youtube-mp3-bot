export const BOT_COMMANDS = [
    { command: '/start', description: 'Welcome' },
    { command: '/audio', description: 'Get audio of the video from youtube' },
    { command: '/lyrics', description: 'Get lyrics of the video from youtube' },
    { command: '/info', description: 'Get info about the user' },
];



export enum STATE_VALUES {
    ACTIVE = 'active',
    STARTED = 'started',
    WAITING_FOR_VIDEO = 'waiting_for_video'
}

export enum STATUSES  {
    ACTIVE = 'active',
    STARTED = 'started',
    WAITING= 'waiting',
    DOWNLOADING_VIDEO = 'downloading_video',
    CONVERT_TO_AUDIO ='converting_audio',
    SENDING_TO_USER = 'sending',
    FINISHED = 'finished'
}

export const COMMANDS_RESPONSES = {
    start:  'Welcome to the bot! Use /audio to download audio or /lyrics to fetch song lyrics.',
    info: '',
    lyrics: '',
    audio: 'Please send a YouTube link, and I will convert it to audio.',
};


const commandList = BOT_COMMANDS.map(command => command.command).join(', ');
export const RESPONSES = {
    somethingWentWrong: 'Something went wrong! Please try again later.',
    invalidYoutubeURL: 'Please send a valid YouTube URL!',
    enospcError: 'Server storage is full. Please try again later.',
    ffmpegError: 'Audio conversion failed. Please contact support.',
    invalidCommand: `Invalid command. Please choose one of the available commands: ${commandList}.`
};