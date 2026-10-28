import type * as TrophyApi from "../index";
/**
 * Response containing created rewards and any per-item issues.
 */
export interface CreateRewardsResponse {
    /** Array of successfully created rewards. */
    created: TrophyApi.CreatedAdminReward[];
    /** Array of issues encountered during creation. */
    issues: TrophyApi.AdminIssue[];
}
