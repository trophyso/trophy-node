import type * as TrophyApi from "../index";
export interface RewardWebhookEventRedemption {
    id: string;
    redeemed: boolean;
    awardedAt: Date;
    redeemedAt?: Date;
    trigger?: TrophyApi.UserRewardTrigger;
}
