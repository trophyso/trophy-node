import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AdminIssue } from "./AdminIssue";
import { CreatedMetric } from "./CreatedMetric";
export declare const CreateMetricsResponse: core.serialization.ObjectSchema<serializers.CreateMetricsResponse.Raw, TrophyApi.CreateMetricsResponse>;
export declare namespace CreateMetricsResponse {
    interface Raw {
        created: CreatedMetric.Raw[];
        issues: AdminIssue.Raw[];
    }
}
