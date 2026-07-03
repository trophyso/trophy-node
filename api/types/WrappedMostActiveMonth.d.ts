import type * as TrophyApi from "../index";
/**
 * The user's most active month during the year.
 */
export interface WrappedMostActiveMonth extends TrophyApi.WrappedActivityPeriod {
    /** The month number (0-11, where 0 is January). */
    month: number;
}
