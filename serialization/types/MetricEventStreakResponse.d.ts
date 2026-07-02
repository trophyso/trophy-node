import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { BaseStreakResponse } from "./BaseStreakResponse";
export declare const MetricEventStreakResponse: core.serialization.ObjectSchema<serializers.MetricEventStreakResponse.Raw, TrophyApi.MetricEventStreakResponse>;
export declare namespace MetricEventStreakResponse {
    interface Raw extends BaseStreakResponse.Raw {
        extended: boolean;
    }
}
