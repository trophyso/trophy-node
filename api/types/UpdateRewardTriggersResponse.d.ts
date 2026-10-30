import type * as TrophyApi from "../index";
/**
 * Response containing updated triggers and any issues encountered.
 */
export interface UpdateRewardTriggersResponse {
    /** Array of successfully updated triggers. */
    updated: TrophyApi.AdminRewardTrigger[];
    /** Array of issues encountered during trigger updates. */
    issues: TrophyApi.AdminIssue[];
}
