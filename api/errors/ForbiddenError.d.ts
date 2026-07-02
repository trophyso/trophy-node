import type * as core from "../../core";
import * as errors from "../../errors/index";
import type * as TrophyApi from "../index";
export declare class ForbiddenError extends errors.TrophyApiError {
    constructor(body: TrophyApi.ErrorBody, rawResponse?: core.RawResponse);
}
