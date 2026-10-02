import type * as TrophyApi from "../index";
/**
 * Response containing users whose streaks were reset and any issues encountered.
 */
export interface ResetStreaksResponse {
    /** Array of user IDs whose streaks were successfully reset to zero. */
    resetUsers: string[];
    /** Array of issues encountered during streak reset. */
    issues: TrophyApi.AdminIssue[];
}
