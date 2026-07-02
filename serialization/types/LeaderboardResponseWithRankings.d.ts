import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { LeaderboardRanking } from "./LeaderboardRanking";
import { LeaderboardResponse } from "./LeaderboardResponse";
import { LeaderboardResponseWithRankingsStatus } from "./LeaderboardResponseWithRankingsStatus";
export declare const LeaderboardResponseWithRankings: core.serialization.ObjectSchema<serializers.LeaderboardResponseWithRankings.Raw, TrophyApi.LeaderboardResponseWithRankings>;
export declare namespace LeaderboardResponseWithRankings {
    interface Raw extends LeaderboardResponse.Raw {
        status: LeaderboardResponseWithRankingsStatus.Raw;
        rankings: LeaderboardRanking.Raw[];
    }
}
