import type * as TrophyApi from "../../../../index";
/**
 * @example
 *     {
 *         user: {
 *             id: "user-id"
 *         }
 *     }
 */
export interface RewardsRedeemRequest {
    /** The user redeeming the reward. The user must already exist. */
    user: TrophyApi.UpsertedUser;
}
