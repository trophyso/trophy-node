import * as errors from "./index";
export declare class TrophyApiTimeoutError extends errors.TrophyApiError {
    constructor(message: string, opts?: {
        cause?: unknown;
    });
}
