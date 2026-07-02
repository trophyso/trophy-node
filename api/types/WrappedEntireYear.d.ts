import type * as TrophyApi from "../index";
/**
 * The user's activity data for the entire year.
 */
export interface WrappedEntireYear extends TrophyApi.WrappedActivityPeriod {
    /** The user's longest streak during the year. */
    longestStreak: TrophyApi.WrappedStreak;
}
