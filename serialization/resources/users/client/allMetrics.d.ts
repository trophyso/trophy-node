import type * as TrophyApi from "../../../../api/index";
import * as core from "../../../../core";
import type * as serializers from "../../../index";
import { MetricResponse } from "../../../types/MetricResponse";
export declare const Response: core.serialization.Schema<serializers.users.allMetrics.Response.Raw, TrophyApi.MetricResponse[]>;
export declare namespace Response {
    type Raw = MetricResponse.Raw[];
}
