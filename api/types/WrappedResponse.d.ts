import type * as TrophyApi from "../index";
/**
 * A user's year-in-review wrapped data including activity summaries, metrics, points, achievements, streaks, and leaderboard rankings.
 */
export interface WrappedResponse {
    /** The user's profile information. */
    user: TrophyApi.User;
    /** The user's activity data for the wrapped year. */
    activity: TrophyApi.WrappedActivity;
}
