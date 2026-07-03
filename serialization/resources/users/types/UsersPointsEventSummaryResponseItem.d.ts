import type * as TrophyApi from "../../../../api/index";
import * as core from "../../../../core";
import type * as serializers from "../../../index";
export declare const UsersPointsEventSummaryResponseItem: core.serialization.ObjectSchema<serializers.UsersPointsEventSummaryResponseItem.Raw, TrophyApi.UsersPointsEventSummaryResponseItem>;
export declare namespace UsersPointsEventSummaryResponseItem {
    interface Raw {
        date: string;
        total: number;
        change: number;
    }
}
