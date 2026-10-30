import type * as TrophyApi from "../index";
export interface UserRewardResponse {
    /** The ID of the reward redemption. */
    id: string;
    awardedAt: Date;
    redeemed: boolean;
    redeemedAt?: Date;
    reward: TrophyApi.RewardSummary;
    trigger?: TrophyApi.UserRewardTrigger;
}
