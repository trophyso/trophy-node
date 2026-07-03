import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const UpdateLeaderboardRequestItemRunUnit: core.serialization.Schema<serializers.UpdateLeaderboardRequestItemRunUnit.Raw, TrophyApi.UpdateLeaderboardRequestItemRunUnit>;
export declare namespace UpdateLeaderboardRequestItemRunUnit {
    type Raw = "day" | "month" | "year";
}
