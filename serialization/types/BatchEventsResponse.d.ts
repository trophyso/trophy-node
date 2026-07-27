import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const BatchEventsResponse: core.serialization.ObjectSchema<serializers.BatchEventsResponse.Raw, TrophyApi.BatchEventsResponse>;
export declare namespace BatchEventsResponse {
    interface Raw {
        accepted: number;
    }
}
