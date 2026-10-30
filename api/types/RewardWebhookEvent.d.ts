import type * as TrophyApi from "../index";
export interface RewardWebhookEvent {
    type: TrophyApi.RewardWebhookEventType;
    timestamp: Date;
    user: TrophyApi.User;
    reward: TrophyApi.RewardSummary;
    redemption: TrophyApi.RewardWebhookEventRedemption;
}
