import type * as TrophyApi from "../index";
/**
 * Response containing updated metrics and any per-item issues identified by metric ID.
 */
export interface UpdateMetricsResponse {
    /** Array of successfully updated metrics. */
    updated: TrophyApi.CreatedMetric[];
    /** Array of issues encountered during metric update. */
    issues: TrophyApi.AdminIssue[];
}
