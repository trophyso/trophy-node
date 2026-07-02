import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { MetricEventLeaderboardResponse } from "./MetricEventLeaderboardResponse";
import { MetricEventPointsResponse } from "./MetricEventPointsResponse";
import { MetricEventStreakResponse } from "./MetricEventStreakResponse";
import { UserAchievementResponse } from "./UserAchievementResponse";
export declare const EventResponse: core.serialization.ObjectSchema<serializers.EventResponse.Raw, TrophyApi.EventResponse>;
export declare namespace EventResponse {
    interface Raw {
        eventId: string;
        metricId: string;
        total: number;
        achievements: UserAchievementResponse.Raw[];
        currentStreak: MetricEventStreakResponse.Raw;
        points: Record<string, MetricEventPointsResponse.Raw>;
        leaderboards: Record<string, MetricEventLeaderboardResponse.Raw>;
        idempotencyKey?: string | null;
        idempotentReplayed?: boolean | null;
    }
}
