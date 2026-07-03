import type * as TrophyApi from "../index";
/**
 * An object representing the user's streak after sending a metric event.
 */
export interface MetricEventStreakResponse extends TrophyApi.BaseStreakResponse {
    /** Whether this metric event increased the user's streak length. */
    extended: boolean;
}
