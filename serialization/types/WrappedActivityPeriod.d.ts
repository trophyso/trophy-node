import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { UserAchievementResponse } from "./UserAchievementResponse";
import { UserLeaderboardResponse } from "./UserLeaderboardResponse";
import { WrappedMetric } from "./WrappedMetric";
import { WrappedPoints } from "./WrappedPoints";
export declare const WrappedActivityPeriod: core.serialization.ObjectSchema<serializers.WrappedActivityPeriod.Raw, TrophyApi.WrappedActivityPeriod>;
export declare namespace WrappedActivityPeriod {
    interface Raw {
        metrics: Record<string, WrappedMetric.Raw>;
        points: Record<string, WrappedPoints.Raw>;
        achievements: UserAchievementResponse.Raw[];
        leaderboards: Record<string, UserLeaderboardResponse.Raw>;
    }
}
