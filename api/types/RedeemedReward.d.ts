export interface RedeemedReward {
    /** The ID of the reward redemption. */
    id: string;
    /** When the reward was awarded. */
    awardedAt: Date;
    /** When the reward was redeemed. */
    redeemedAt: Date;
}
