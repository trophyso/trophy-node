import type * as TrophyApi from "../index";
/**
 * The user's most active week during the year.
 */
export interface WrappedMostActiveWeek extends TrophyApi.WrappedActivityPeriod {
    /** The start date of the most active week in YYYY-MM-DD format. */
    start: string;
    /** The end date of the most active week in YYYY-MM-DD format. */
    end: string;
}
