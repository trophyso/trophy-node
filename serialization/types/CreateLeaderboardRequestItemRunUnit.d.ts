import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const CreateLeaderboardRequestItemRunUnit: core.serialization.Schema<serializers.CreateLeaderboardRequestItemRunUnit.Raw, TrophyApi.CreateLeaderboardRequestItemRunUnit>;
export declare namespace CreateLeaderboardRequestItemRunUnit {
    type Raw = "day" | "month" | "year";
}
