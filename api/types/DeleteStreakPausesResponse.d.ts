import type * as TrophyApi from "../index";
/**
 * Response containing archived streak pauses and any issues encountered.
 */
export interface DeleteStreakPausesResponse {
    /** Array of archived streak pause IDs. */
    deleted: TrophyApi.DeletedResource[];
    /** Array of issues encountered during pause archival. */
    issues: TrophyApi.AdminIssue[];
}
