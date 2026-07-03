import type * as TrophyApi from "../index";
/**
 * Response containing updated triggers and any issues encountered.
 */
export interface PatchPointsTriggersResponse {
    /** Array of successfully updated triggers. */
    updated: TrophyApi.AdminPointsTrigger[];
    /** Array of issues encountered during trigger updates. */
    issues: TrophyApi.AdminIssue[];
}
