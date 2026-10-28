import type * as TrophyApi from "../index";
/**
 * Response containing updated rewards and any per-item issues.
 */
export interface UpdateRewardsResponse {
    /** Array of successfully updated rewards. */
    updated: TrophyApi.AdminReward[];
    /** Array of issues encountered during update. */
    issues: TrophyApi.AdminIssue[];
}
