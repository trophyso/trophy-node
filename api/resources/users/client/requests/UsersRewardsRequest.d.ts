/**
 * @example
 *     {
 *         redeemed: true,
 *         startDate: "startDate",
 *         endDate: "endDate",
 *         skip: 1,
 *         limit: 1
 *     }
 */
export interface UsersRewardsRequest {
    /** When set, only return rewards that have or have not been redeemed. */
    redeemed?: boolean;
    /** Inclusive start of the awarded-at range, as YYYY-MM-DD in UTC. */
    startDate?: string;
    /** Inclusive end of the awarded-at range, as YYYY-MM-DD in UTC. */
    endDate?: string;
    /** Number of rewards to skip. Defaults to 0. */
    skip?: number;
    /** Maximum number of rewards to return. Defaults to 100 and cannot exceed 100. */
    limit?: number;
}
