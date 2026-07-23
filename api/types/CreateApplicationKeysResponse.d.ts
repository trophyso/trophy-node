import type * as TrophyApi from "../index";
/**
 * Response containing created application API keys and any issues.
 */
export interface CreateApplicationKeysResponse {
    /** Array of successfully created application API keys. */
    created: TrophyApi.CreatedApplicationKey[];
    /** Array of issues encountered during creation. */
    issues: TrophyApi.AdminIssue[];
}
