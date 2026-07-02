import type * as TrophyApi from "../../../../api/index";
import * as core from "../../../../core";
import type * as serializers from "../../../index";
import { UsersPointsEventSummaryResponseItem } from "../types/UsersPointsEventSummaryResponseItem";
export declare const Response: core.serialization.Schema<serializers.users.pointsEventSummary.Response.Raw, TrophyApi.UsersPointsEventSummaryResponseItem[]>;
export declare namespace Response {
    type Raw = UsersPointsEventSummaryResponseItem.Raw[];
}
