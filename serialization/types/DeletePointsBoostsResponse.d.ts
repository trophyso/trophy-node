import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AdminIssue } from "./AdminIssue";
import { DeletedResource } from "./DeletedResource";
export declare const DeletePointsBoostsResponse: core.serialization.ObjectSchema<serializers.DeletePointsBoostsResponse.Raw, TrophyApi.DeletePointsBoostsResponse>;
export declare namespace DeletePointsBoostsResponse {
    interface Raw {
        deleted: DeletedResource.Raw[];
        issues: AdminIssue.Raw[];
    }
}
