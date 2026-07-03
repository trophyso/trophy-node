import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AdminIssue } from "./AdminIssue";
import { DeletedResource } from "./DeletedResource";
export declare const DeletePointsLevelsResponse: core.serialization.ObjectSchema<serializers.DeletePointsLevelsResponse.Raw, TrophyApi.DeletePointsLevelsResponse>;
export declare namespace DeletePointsLevelsResponse {
    interface Raw {
        deleted: DeletedResource.Raw[];
        issues: AdminIssue.Raw[];
    }
}
