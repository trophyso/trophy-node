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
    dueAt?: string;
    /** When the user completed the step, as an ISO 8601 date and time. Without an offset, it's in the user's timezone, and a time after now is read as now. Null uncompletes it. Not with `completion: none`, which is never completed, or `completion: metric`, which completes when its metric reaches the target. */
    completedAt?: string;
    /** The metric's key. Required with `completion: metric`, and only for it. */
    metric?: string;
    /** The metric total that completes it. Required with `completion: metric`, and only for it. */
    target?: number;
    /** `completion: metric` only. The date, in the user's timezone, the metric total counts from. Defaults to today. */
    start?: string;
}
