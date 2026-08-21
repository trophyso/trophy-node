/**
 * An object representing a streak pause.
 */
export interface StreakResponsePausesItem {
    /** The unique ID of the streak pause. */
    id: string;
    /** The first date the pause covers. */
    start: string;
    /** The last date the pause covers. */
    end: string;
}
