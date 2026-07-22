import type * as TrophyApi from "../index";
/**
 * Response containing deleted application API key IDs and any issues.
 */
export interface DeleteApplicationKeysResponse {
    /** Array of deleted application API key IDs. */
    deleted: TrophyApi.DeletedResource[];
    /** Array of issues encountered during deletion. */
    issues: TrophyApi.AdminIssue[];
}
