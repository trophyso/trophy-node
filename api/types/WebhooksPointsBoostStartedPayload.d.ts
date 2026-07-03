import type * as TrophyApi from "../index";
export interface WebhooksPointsBoostStartedPayload {
    /** The webhook event type. */
    type: "points.boost_started";
    /** When the event occurred (ISO 8601). */
    timestamp: Date;
    /** The points boost that started. */
    boost: TrophyApi.PointsBoostWebhookPayload;
}
