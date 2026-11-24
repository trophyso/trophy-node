import type * as TrophyApi from "../index";
/**
 * A step of a goal: a goal of its own, with its own key, one level deep. A step whose key the goal already has is updated, with fields left out staying as they are.
 */
export interface GoalStepRequest {
    /** The step's key, unique per user like any goal's. 1–100 letters, numbers, hyphens or underscores, and not `plural` or `singular`. */
    key: string;
    /** What the step is, as messages name it. */
    label?: string;
    /** How the step is completed. Defaults to `manual`. */
    completion?: TrophyApi.GoalCompletion;
    /** When the step is due, as an ISO 8601 date and time. Without an offset, it's in the user's timezone. */
    dueAt?: Date;
    /** Whether the user has completed the step. */
    completed?: boolean;
    /** The metric's key, required with `completion: metric`. */
    metric?: string;
    /** The metric total that completes it, required with `completion: metric`. */
    target?: number;
    /** With `completion: metric`, the date, in the user's timezone, the metric total counts from. Defaults to today. */
    start?: string;
}
