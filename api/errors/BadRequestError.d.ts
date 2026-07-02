import type * as core from "../../core";
import * as errors from "../../errors/index";
export declare class BadRequestError extends errors.TrophyApiError {
    constructor(body?: unknown, rawResponse?: core.RawResponse);
}
