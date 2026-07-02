import type * as TrophyApi from "../../../../api/index";
import * as core from "../../../../core";
import type * as serializers from "../../../index";
import { UsersMetricEventSummaryResponseItem } from "../types/UsersMetricEventSummaryResponseItem";
export declare const Response: core.serialization.Schema<serializers.users.metricEventSummary.Response.Raw, TrophyApi.UsersMetricEventSummaryResponseItem[]>;
export declare namespace Response {
    type Raw = UsersMetricEventSummaryResponseItem.Raw[];
}
