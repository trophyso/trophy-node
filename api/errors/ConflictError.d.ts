import type * as core from "../../core";
import * as errors from "../../errors/index";
import type * as TrophyApi from "../index";
export declare class ConflictError extends errors.TrophyApiError {
    constructor(body: TrophyApi.ErrorBody, rawResponse?: core.RawResponse);
}
