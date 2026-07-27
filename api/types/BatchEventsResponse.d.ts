/**
 * Response returned when a batch of metric events is accepted.
 */
export interface BatchEventsResponse {
    /** The number of events accepted into the processing queue. */
    accepted: number;
}
