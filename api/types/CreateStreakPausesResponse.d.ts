import type * as TrophyApi from "../index";
/**
 * Response containing created streak pauses and any issues encountered.
 */
export interface CreateStreakPausesResponse {
    /** Array of streak pauses that were created. */
    created: TrophyApi.AdminStreakPause[];
    /** Array of issues encountered during pause creation. */
    issues: TrophyApi.AdminIssue[];
}
