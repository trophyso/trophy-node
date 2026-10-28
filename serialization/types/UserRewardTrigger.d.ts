import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { UserRewardTriggerType } from "./UserRewardTriggerType";
export declare const UserRewardTrigger: core.serialization.ObjectSchema<serializers.UserRewardTrigger.Raw, TrophyApi.UserRewardTrigger>;
export declare namespace UserRewardTrigger {
    interface Raw {
        id: string;
        type: UserRewardTriggerType.Raw;
        metricId?: string | null;
        threshold?: number | null;
        achievementId?: string | null;
        streakLength?: number | null;
        leaderboardId?: string | null;
        rank?: number | null;
    }
}
