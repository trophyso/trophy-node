import type * as TrophyApi from "../index";
/**
 * Response containing created triggers and any per-item issues.
 */
export interface CreateRewardTriggersResponse {
    /** Array of successfully created triggers. */
    created: TrophyApi.AdminRewardTrigger[];
    /** Array of issues encountered during trigger creation. */
    issues: TrophyApi.AdminIssue[];
}
