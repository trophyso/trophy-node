import type * as TrophyApi from "../index";
/**
 * Response containing updated attributes and any per-item issues identified by attribute ID.
 */
export interface UpdateAttributesResponse {
    /** Array of successfully updated attributes. */
    updated: TrophyApi.AdminAttribute[];
    /** Array of issues encountered during attribute update. */
    issues: TrophyApi.AdminIssue[];
}
