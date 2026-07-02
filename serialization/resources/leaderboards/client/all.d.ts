import type * as TrophyApi from "../../../../api/index";
import * as core from "../../../../core";
import type * as serializers from "../../../index";
import { LeaderboardsAllResponseItem } from "../types/LeaderboardsAllResponseItem";
export declare const Response: core.serialization.Schema<serializers.leaderboards.all.Response.Raw, TrophyApi.LeaderboardsAllResponseItem[]>;
export declare namespace Response {
    type Raw = LeaderboardsAllResponseItem.Raw[];
}
