import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AchievementWithStatsResponse } from "./AchievementWithStatsResponse";
export declare const UserAchievementWithStatsResponse: core.serialization.ObjectSchema<serializers.UserAchievementWithStatsResponse.Raw, TrophyApi.UserAchievementWithStatsResponse>;
export declare namespace UserAchievementWithStatsResponse {
    interface Raw extends AchievementWithStatsResponse.Raw {
        achievedAt?: string | null;
    }
}
