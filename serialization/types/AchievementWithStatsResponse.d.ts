import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AchievementResponse } from "./AchievementResponse";
export declare const AchievementWithStatsResponse: core.serialization.ObjectSchema<serializers.AchievementWithStatsResponse.Raw, TrophyApi.AchievementWithStatsResponse>;
export declare namespace AchievementWithStatsResponse {
    interface Raw extends AchievementResponse.Raw {
        completions: number;
        rarity: number;
    }
}
