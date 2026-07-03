import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const StreakFrequency: core.serialization.Schema<serializers.StreakFrequency.Raw, TrophyApi.StreakFrequency>;
export declare namespace StreakFrequency {
    type Raw = "daily" | "weekly" | "monthly";
}
