import type * as TrophyApi from "../../../../api/index";
import * as core from "../../../../core";
import type * as serializers from "../../../index";
export declare const UsersMetricEventSummaryResponseItem: core.serialization.ObjectSchema<serializers.UsersMetricEventSummaryResponseItem.Raw, TrophyApi.UsersMetricEventSummaryResponseItem>;
export declare namespace UsersMetricEventSummaryResponseItem {
    interface Raw {
        date: string;
        total: number;
        change: number;
    }
}
