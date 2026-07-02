import type * as TrophyApi from "../index";
/**
 * Response containing created boosts and any issues encountered while creating points boosts.
 */
export interface CreatePointsBoostsResponse {
    /** Array of successfully created boosts. */
    created: TrophyApi.AdminPointsBoost[];
    /** Array of issues encountered during boost creation. */
    issues: TrophyApi.AdminIssue[];
}
