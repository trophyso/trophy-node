import type * as core from "../../core";
import * as errors from "../../errors/index";
export declare class NotFoundError extends errors.TrophyApiError {
    constructor(body?: unknown, rawResponse?: core.RawResponse);
}
