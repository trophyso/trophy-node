import type * as TrophyApi from "../../../../api/index";
import * as core from "../../../../core";
import type * as serializers from "../../../index";
export declare const UsersMetricEventSummaryRequestAggregation: core.serialization.Schema<serializers.UsersMetricEventSummaryRequestAggregation.Raw, TrophyApi.UsersMetricEventSummaryRequestAggregation>;
export declare namespace UsersMetricEventSummaryRequestAggregation {
    type Raw = "daily" | "weekly" | "monthly";
}
