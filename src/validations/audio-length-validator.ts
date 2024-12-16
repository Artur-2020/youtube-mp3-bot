import ytdl from "@distube/ytdl-core";
import {ValidationError} from "../custom_exeptions";
import {RESPONSES} from "../constants";

const {maximumLengthReached} = RESPONSES;

/**
 * Function for validate Video Length
 * @param youtubeUrl
 */
export default async function (youtubeUrl: string) {
    try {
        const videoInfo = await ytdl.getInfo(youtubeUrl);
        const { lengthSeconds } = videoInfo.videoDetails;

        // Validate video length (must not exceed 30 minutes)
        const maxLengthSeconds = 30 * 60; // 30 minutes in seconds
        if (parseInt(lengthSeconds, 10) > maxLengthSeconds) {
            throw new ValidationError(maximumLengthReached);
        }

    } catch (error) {
        throw error;
    }
}
