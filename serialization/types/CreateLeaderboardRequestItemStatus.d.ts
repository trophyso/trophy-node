import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const CreateLeaderboardRequestItemStatus: core.serialization.Schema<serializers.CreateLeaderboardRequestItemStatus.Raw, TrophyApi.CreateLeaderboardRequestItemStatus>;
export declare namespace CreateLeaderboardRequestItemStatus {
    type Raw = "inactive" | "active" | "scheduled" | "finished";
}
