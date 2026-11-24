import type * as TrophyApi from "../index";
export interface EventResponse {
    /** The unique ID of the event. */
    eventId: string;
    /** The unique ID of the metric that was updated. */
    metricId: string;
    /** The user's new total progress against the metric. */
    total: number;
    /** Achievements completed as a result of this event. */
    achievements: TrophyApi.UserAchievementResponse[];
    /** The user's current streak. */
    currentStreak: TrophyApi.MetricEventStreakResponse;
    /** A map of points systems by key. Only contains points systems that were affected by the event. */
    points: Record<string, TrophyApi.MetricEventPointsResponse>;
    /** A map of leaderboards by key. Only contains leaderboards that were affected by the event. */
    leaderboards: Record<string, TrophyApi.MetricEventLeaderboardResponse>;
    /** A map of the user's metric goals and steps by key. Only contains those for the event's metric that weren't completed before the event and whose total it counted towards, including any it completed. */
    goals: Record<string, TrophyApi.GoalResponse>;
    /** Rewards awarded as a result of this event. */
    rewards: TrophyApi.UserRewardResponse[];
    /** The idempotency key used for the event, if one was provided. */
    idempotencyKey?: string;
    /** Whether the event was replayed due to idempotency. */
    idempotentReplayed?: boolean;
}
