import type * as TrophyApi from "../index";
/**
 * Response containing created metrics and any per-item issues.
 */
export interface CreateMetricsResponse {
    /** Array of successfully created metrics. */
    created: TrophyApi.CreatedMetric[];
    /** Array of issues encountered during metric creation. */
    issues: TrophyApi.AdminIssue[];
}
