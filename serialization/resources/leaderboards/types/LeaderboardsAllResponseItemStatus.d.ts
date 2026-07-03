import type * as TrophyApi from "../../../../api/index";
import * as core from "../../../../core";
import type * as serializers from "../../../index";
export declare const LeaderboardsAllResponseItemStatus: core.serialization.Schema<serializers.LeaderboardsAllResponseItemStatus.Raw, TrophyApi.LeaderboardsAllResponseItemStatus>;
export declare namespace LeaderboardsAllResponseItemStatus {
    type Raw = "active" | "scheduled" | "finished";
}
