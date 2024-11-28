import {ValidationError} from "../custom_exeptions";
import ytdl from "@distube/ytdl-core";
import {RESPONSES} from "../constants";

const {invalidYoutubeURL} = RESPONSES;
export default function (text: string) {
    if (!ytdl.validateURL(text)) {
            throw new ValidationError(invalidYoutubeURL);
    }
}