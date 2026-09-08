import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AdminIssue } from "./AdminIssue";
import { DeletedResource } from "./DeletedResource";
export declare const DeleteAchievementsResponse: core.serialization.ObjectSchema<serializers.DeleteAchievementsResponse.Raw, TrophyApi.DeleteAchievementsResponse>;
export declare namespace DeleteAchievementsResponse {
    interface Raw {
        deleted: DeletedResource.Raw[];
        issues: AdminIssue.Raw[];
    }
}
