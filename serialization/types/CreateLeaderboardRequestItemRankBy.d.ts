import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const CreateLeaderboardRequestItemRankBy: core.serialization.Schema<serializers.CreateLeaderboardRequestItemRankBy.Raw, TrophyApi.CreateLeaderboardRequestItemRankBy>;
export declare namespace CreateLeaderboardRequestItemRankBy {
    type Raw = "metric" | "streak" | "points";
}
