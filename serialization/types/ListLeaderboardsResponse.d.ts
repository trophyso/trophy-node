import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AdminLeaderboard } from "./AdminLeaderboard";
export declare const ListLeaderboardsResponse: core.serialization.Schema<serializers.ListLeaderboardsResponse.Raw, TrophyApi.ListLeaderboardsResponse>;
export declare namespace ListLeaderboardsResponse {
    type Raw = AdminLeaderboard.Raw[];
}
