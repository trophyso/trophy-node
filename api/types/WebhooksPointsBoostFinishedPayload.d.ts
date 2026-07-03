import type * as TrophyApi from "../index";
export interface WebhooksPointsBoostFinishedPayload {
    /** The webhook event type. */
    type: "points.boost_finished";
    /** When the event occurred (ISO 8601). */
    timestamp: Date;
    /** The points boost that finished. */
    boost: TrophyApi.PointsBoostWebhookPayload;
}
