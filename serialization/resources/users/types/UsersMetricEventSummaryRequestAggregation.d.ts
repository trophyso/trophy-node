/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import * as TrophyApi from "../../../../api";
import * as core from "../../../../core";
export declare const UsersMetricEventSummaryRequestAggregation: core.serialization.Schema<serializers.UsersMetricEventSummaryRequestAggregation.Raw, TrophyApi.UsersMetricEventSummaryRequestAggregation>;
export declare namespace UsersMetricEventSummaryRequestAggregation {
    type Raw = "daily" | "weekly" | "monthly";
}
