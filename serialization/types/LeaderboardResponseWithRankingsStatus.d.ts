import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const LeaderboardResponseWithRankingsStatus: core.serialization.Schema<serializers.LeaderboardResponseWithRankingsStatus.Raw, TrophyApi.LeaderboardResponseWithRankingsStatus>;
export declare namespace LeaderboardResponseWithRankingsStatus {
    type Raw = "active" | "scheduled" | "finished";
}
