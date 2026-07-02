import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const UpdateLeaderboardRequestItemStatus: core.serialization.Schema<serializers.UpdateLeaderboardRequestItemStatus.Raw, TrophyApi.UpdateLeaderboardRequestItemStatus>;
export declare namespace UpdateLeaderboardRequestItemStatus {
    type Raw = "inactive" | "active" | "scheduled" | "finished";
}
