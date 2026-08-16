import type * as TrophyApi from "../index";
/**
 * A streak pause returned from the admin pauses endpoints.
 */
export interface AdminStreakPause {
    /** The unique ID of the streak pause. */
    id: string;
    /** The ID of the user the pause belongs to. */
    userId: string;
    /** The first date the pause covers. */
    start: string;
    /** The last date the pause covers. */
    end: string;
    /** The status of the pause. */
    status: TrophyApi.AdminStreakPauseStatus;
}
