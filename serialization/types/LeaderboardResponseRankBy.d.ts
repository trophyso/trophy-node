import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const LeaderboardResponseRankBy: core.serialization.Schema<serializers.LeaderboardResponseRankBy.Raw, TrophyApi.LeaderboardResponseRankBy>;
export declare namespace LeaderboardResponseRankBy {
    type Raw = "points" | "streak" | "metric";
}
