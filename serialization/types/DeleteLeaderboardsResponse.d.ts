import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AdminIssue } from "./AdminIssue";
import { DeletedResource } from "./DeletedResource";
export declare const DeleteLeaderboardsResponse: core.serialization.ObjectSchema<serializers.DeleteLeaderboardsResponse.Raw, TrophyApi.DeleteLeaderboardsResponse>;
export declare namespace DeleteLeaderboardsResponse {
    interface Raw {
        deleted: DeletedResource.Raw[];
        issues: AdminIssue.Raw[];
    }
}
