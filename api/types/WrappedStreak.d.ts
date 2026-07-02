import type * as TrophyApi from "../index";
/**
 * The user's longest streak during the wrapped period.
 */
export interface WrappedStreak {
    /** The length of the streak. */
    length: number;
    /** The frequency of the streak. */
    frequency: TrophyApi.StreakFrequency;
    /** The start date of the streak period. */
    periodStart?: string;
    /** The end date of the streak period. */
    periodEnd?: string;
    /** The date the streak started. */
    started?: string;
}
