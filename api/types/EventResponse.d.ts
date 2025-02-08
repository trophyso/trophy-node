/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as TrophyApi from "..";
export interface EventResponse {
    /** The unique ID of the event. */
    eventId: string;
    /** The unique ID of the metric that was updated. */
    metricId: string;
    /** The user's new total progress against the metric. */
    total: number;
    /** Changes to achievements as a result of this event. */
    achievements?: TrophyApi.EventResponseMetricsItem[];
}
