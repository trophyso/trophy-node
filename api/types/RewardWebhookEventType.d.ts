export declare const RewardWebhookEventType: {
    readonly RewardAwarded: "reward.awarded";
    readonly RewardRedeemed: "reward.redeemed";
};
export type RewardWebhookEventType = (typeof RewardWebhookEventType)[keyof typeof RewardWebhookEventType];
