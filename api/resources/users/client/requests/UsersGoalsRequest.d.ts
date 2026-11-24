import type * as TrophyApi from "../../../../index";
/**
 * @example
 *     {
 *         status: "active",
 *         skip: 1,
 *         limit: 1
 *     }
 */
export interface UsersGoalsRequest {
    /** When set, only return goals with this status. A goal's steps come with it, whatever their own status. */
    status?: TrophyApi.GoalStatus;
    /** Number of goals to skip. Defaults to 0. */
    skip?: number;
    /** Maximum number of goals to return. Defaults to 100 and cannot exceed 100. */
    limit?: number;
}
