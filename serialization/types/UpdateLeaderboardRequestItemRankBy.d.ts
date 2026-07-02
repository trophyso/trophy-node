import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const UpdateLeaderboardRequestItemRankBy: core.serialization.Schema<serializers.UpdateLeaderboardRequestItemRankBy.Raw, TrophyApi.UpdateLeaderboardRequestItemRankBy>;
export declare namespace UpdateLeaderboardRequestItemRankBy {
    type Raw = "metric" | "streak" | "points";
}
