import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AdminIssue } from "./AdminIssue";
import { DeletedResource } from "./DeletedResource";
export declare const DeletePointsSystemsResponse: core.serialization.ObjectSchema<serializers.DeletePointsSystemsResponse.Raw, TrophyApi.DeletePointsSystemsResponse>;
export declare namespace DeletePointsSystemsResponse {
    interface Raw {
        deleted: DeletedResource.Raw[];
        issues: AdminIssue.Raw[];
    }
}
