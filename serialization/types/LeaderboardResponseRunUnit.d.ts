import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const LeaderboardResponseRunUnit: core.serialization.Schema<serializers.LeaderboardResponseRunUnit.Raw, TrophyApi.LeaderboardResponseRunUnit>;
export declare namespace LeaderboardResponseRunUnit {
    type Raw = "day" | "month" | "year";
}
