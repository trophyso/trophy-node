import type * as TrophyApi from "../index";
/**
 * The user's most active day during the year.
 */
export interface WrappedMostActiveDay extends TrophyApi.WrappedActivityPeriod {
    /** The date of the most active day in YYYY-MM-DD format. */
    date: string;
}
