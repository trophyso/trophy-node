/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as TrophyApi from "../../api";
import * as core from "../../core";
export declare const MetricEventPointsResponse: core.serialization.ObjectSchema<serializers.MetricEventPointsResponse.Raw, TrophyApi.MetricEventPointsResponse>;
export declare namespace MetricEventPointsResponse {
    interface Raw extends serializers.GetUserPointsResponse.Raw {
        added?: number | null;
    }
}
