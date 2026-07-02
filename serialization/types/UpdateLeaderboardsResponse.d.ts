import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AdminIssue } from "./AdminIssue";
import { AdminLeaderboard } from "./AdminLeaderboard";
export declare const UpdateLeaderboardsResponse: core.serialization.ObjectSchema<serializers.UpdateLeaderboardsResponse.Raw, TrophyApi.UpdateLeaderboardsResponse>;
export declare namespace UpdateLeaderboardsResponse {
    interface Raw {
        updated: AdminLeaderboard.Raw[];
        issues: AdminIssue.Raw[];
    }
}
