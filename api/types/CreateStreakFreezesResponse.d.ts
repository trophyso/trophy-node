import type * as TrophyApi from "../index";
/**
 * Response containing any issues encountered while creating streak freezes.
 */
export interface CreateStreakFreezesResponse {
    /** Array of issues encountered during freeze creation. */
    issues: TrophyApi.AdminIssue[];
}
