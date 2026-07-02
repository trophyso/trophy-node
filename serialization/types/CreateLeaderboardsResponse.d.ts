import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AdminIssue } from "./AdminIssue";
import { AdminLeaderboard } from "./AdminLeaderboard";
export declare const CreateLeaderboardsResponse: core.serialization.ObjectSchema<serializers.CreateLeaderboardsResponse.Raw, TrophyApi.CreateLeaderboardsResponse>;
export declare namespace CreateLeaderboardsResponse {
    interface Raw {
        created: AdminLeaderboard.Raw[];
        issues: AdminIssue.Raw[];
    }
}
