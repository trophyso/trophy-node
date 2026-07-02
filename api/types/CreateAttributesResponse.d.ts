import type * as TrophyApi from "../index";
/**
 * Response containing created attributes and any per-item issues.
 */
export interface CreateAttributesResponse {
    /** Array of successfully created attributes. */
    created: TrophyApi.AdminAttribute[];
    /** Array of issues encountered during attribute creation. */
    issues: TrophyApi.AdminIssue[];
}
