import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AdminIssue } from "./AdminIssue";
import { CreatedMetric } from "./CreatedMetric";
export declare const UpdateMetricsResponse: core.serialization.ObjectSchema<serializers.UpdateMetricsResponse.Raw, TrophyApi.UpdateMetricsResponse>;
export declare namespace UpdateMetricsResponse {
    interface Raw {
        updated: CreatedMetric.Raw[];
        issues: AdminIssue.Raw[];
    }
}
