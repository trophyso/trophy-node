import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AdminIssue } from "./AdminIssue";
import { DeletedResource } from "./DeletedResource";
export declare const DeleteMetricsResponse: core.serialization.ObjectSchema<serializers.DeleteMetricsResponse.Raw, TrophyApi.DeleteMetricsResponse>;
export declare namespace DeleteMetricsResponse {
    interface Raw {
        deleted: DeletedResource.Raw[];
        issues: AdminIssue.Raw[];
    }
}
