import type * as TrophyApi from "../index";
/**
 * A metric event submitted as part of a batch. Same shape as a single metric event, with the metric key included in the body.
 */
export interface BatchMetricEvent {
    /** Unique reference of the metric as set when created. */
    key: string;
    /** The user that triggered the event. */
    user: TrophyApi.BatchMetricEventUser;
    /** The value to add to the user's current total for the given metric. */
    value: number;
    /** Event attributes as key-value pairs. Keys must match existing event attributes set up in the Trophy dashboard. */
    attributes?: Record<string, string>;
    /** Optional idempotency key for this event. When provided, the event is ignored if another event with the same idempotency key has already  been processed. */
    idempotencyKey?: string;
}
