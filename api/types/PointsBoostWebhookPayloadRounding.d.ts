/** The rounding method applied to boosted points. */
export declare const PointsBoostWebhookPayloadRounding: {
    readonly Down: "down";
    readonly Up: "up";
    readonly Nearest: "nearest";
};
export type PointsBoostWebhookPayloadRounding = (typeof PointsBoostWebhookPayloadRounding)[keyof typeof PointsBoostWebhookPayloadRounding];
