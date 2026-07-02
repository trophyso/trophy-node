import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AchievementResponse } from "./AchievementResponse";
export declare const UserAchievementResponse: core.serialization.ObjectSchema<serializers.UserAchievementResponse.Raw, TrophyApi.UserAchievementResponse>;
export declare namespace UserAchievementResponse {
    interface Raw extends AchievementResponse.Raw {
        achievedAt?: string | null;
    }
}
