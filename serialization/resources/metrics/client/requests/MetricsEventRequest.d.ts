/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../..";
import * as TrophyApi from "../../../../../api";
import * as core from "../../../../../core";
export declare const MetricsEventRequest: core.serialization.Schema<serializers.MetricsEventRequest.Raw, TrophyApi.MetricsEventRequest>;
export declare namespace MetricsEventRequest {
    interface Raw {
        user: serializers.UpsertedUser.Raw;
        value: number;
    }
}
