import type * as TrophyApi from "../index";
/**
 * An object representing the user's streak.
 */
export interface StreakResponse extends TrophyApi.BaseStreakResponse {
    /** The timestamp the streak was most recently extended. Null if the streak is not active. */
    extended?: Date;
    /** A list of the user's past streak periods up through the current period. Each period includes the start and end dates and the length of the streak. */
    streakHistory: TrophyApi.StreakResponseStreakHistoryItem[];
}
