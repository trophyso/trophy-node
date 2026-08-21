import type * as TrophyApi from "../index";
/**
 * Response containing deleted streak pauses and any issues encountered.
 */
export interface DeleteStreakPausesResponse {
    /** Array of deleted streak pause IDs. */
    deleted: TrophyApi.DeletedResource[];
    /** Array of issues encountered during pause deletion. */
    issues: TrophyApi.AdminIssue[];
}
