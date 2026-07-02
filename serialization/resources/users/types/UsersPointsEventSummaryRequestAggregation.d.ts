import type * as TrophyApi from "../../../../api/index";
import * as core from "../../../../core";
import type * as serializers from "../../../index";
export declare const UsersPointsEventSummaryRequestAggregation: core.serialization.Schema<serializers.UsersPointsEventSummaryRequestAggregation.Raw, TrophyApi.UsersPointsEventSummaryRequestAggregation>;
export declare namespace UsersPointsEventSummaryRequestAggregation {
    type Raw = "daily" | "weekly" | "monthly";
}
