import type * as TrophyApi from "../index";
/**
 * Response containing restored users and any issues encountered.
 */
export interface RestoreStreaksResponse {
    /** Array of user IDs whose streaks were successfully restored. */
    restoredUsers: string[];
    /** Array of issues encountered during streak restoration. */
    issues: TrophyApi.AdminIssue[];
}
