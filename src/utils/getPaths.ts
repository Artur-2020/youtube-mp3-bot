import {resolve, join} from 'path';
import * as fsExtra from "fs-extra";
import {VideoInfo} from "../interfaces";

const resolvedPath = resolve();
const videoDir = 'downloads';
const audioDir = 'downloads/audio';

export const ensureAudioVideoDirsExists = async () => {
    await fsExtra.ensureDir(videoDir);
    await fsExtra.ensureDir(videoDir);

}
export const getVideoPath = () => {
    return join(resolvedPath, videoDir, `video_${Date.now()}.mp4`);
}


export const getAudioPath = (data: VideoInfo) => {
    return join(resolvedPath, audioDir, `${data.title}.mp3`);
}

