import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const AdminAggregationPeriod: core.serialization.Schema<serializers.AdminAggregationPeriod.Raw, TrophyApi.AdminAggregationPeriod>;
export declare namespace AdminAggregationPeriod {
    type Raw = "weekly" | "monthly";
}
