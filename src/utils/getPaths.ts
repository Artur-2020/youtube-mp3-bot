import {resolve, join} from 'path';
import * as fsExtra from "fs-extra";
import {VideoInfo} from "../interfaces";

const resolvedPath = resolve();
const videoDir = 'downloads';
const audioDir = 'downloads/audio';

/**
 * Check if the folders for audio and video does not exists create
 */
export const ensureAudioVideoDirsExists = async () => {
    await fsExtra.ensureDir(videoDir);
    await fsExtra.ensureDir(audioDir);

}

/**
 * Send video path for the saving downloaded video
 */
export const getVideoPath = () => {
    return join(resolvedPath, videoDir, `video_${Date.now()}.mp4`);
}

/**
 * Send audio path for saving audio after convert
 */

export const getAudioPath = () => {
    return join(resolvedPath, audioDir, `audio_${Date.now()}.mp3`);
}

