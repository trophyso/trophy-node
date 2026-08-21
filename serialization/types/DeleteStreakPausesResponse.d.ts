import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AdminIssue } from "./AdminIssue";
import { DeletedResource } from "./DeletedResource";
export declare const DeleteStreakPausesResponse: core.serialization.ObjectSchema<serializers.DeleteStreakPausesResponse.Raw, TrophyApi.DeleteStreakPausesResponse>;
export declare namespace DeleteStreakPausesResponse {
    interface Raw {
        deleted: DeletedResource.Raw[];
        issues: AdminIssue.Raw[];
    }
}
