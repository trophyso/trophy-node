import type * as TrophyApi from "../index";
export interface WebhooksPointsChangedPayload {
    /** The webhook event type. */
    type: "points.changed";
    /** The user whose points increased or decreased. */
    user: TrophyApi.User;
    /** The user's points after the event (includes added amount for this event). */
    points: TrophyApi.MetricEventPointsResponse;
}
