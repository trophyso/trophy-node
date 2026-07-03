import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const AdminLeaderboardRankBy: core.serialization.Schema<serializers.AdminLeaderboardRankBy.Raw, TrophyApi.AdminLeaderboardRankBy>;
export declare namespace AdminLeaderboardRankBy {
    type Raw = "metric" | "streak" | "points";
}
