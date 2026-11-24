import type * as TrophyApi from "../../../../index";
/**
 * @example
 *     {
 *         key: "spanish-exam",
 *         label: "Spanish B1 exam",
 *         completion: "none",
 *         dueAt: "2026-11-20T09:00:00Z"
 *     }
 *
 * @example
 *     {
 *         key: "first-essay",
 *         label: "First essay",
 *         dueAt: "2026-11-12T17:00:00Z"
 *     }
 *
 * @example
 *     {
 *         key: "spanish-exam",
 *         label: "Spanish B1 exam",
 *         completion: "none",
 *         dueAt: "2026-11-20T09:00:00Z",
 *         steps: [{
 *                 key: "unit-1",
 *                 label: "Unit 1 vocabulary",
 *                 dueAt: "2026-11-10T09:00:00Z"
 *             }, {
 *                 key: "unit-2",
 *                 label: "Unit 2 grammar",
 *                 dueAt: "2026-11-14T09:00:00Z"
 *             }]
 *     }
 *
 * @example
 *     {
 *         key: "lessons",
 *         label: "50 lessons",
 *         completion: "metric",
 *         metric: "lessons",
 *         target: 50
 *     }
 *
 * @example
 *     {
 *         key: "unit-3",
 *         parent: "spanish-exam",
 *         label: "Unit 3 listening",
 *         dueAt: "2026-11-17T09:00:00Z"
 *     }
 */
export interface CreateGoalRequest {
    /** The goal's key, unique per user. 1–100 letters, numbers, hyphens or underscores, and not `plural` or `singular`. */
    key: string;
    /** The key of a goal to add this to as a step, after its last. The parent can't be a step, can't have more than 100 steps, and the request can't have `steps`. */
    parent?: string;
    /** What the goal is, as messages name it, e.g. "Spanish B1 exam". */
    label?: string;
    /** How the goal is completed. Defaults to `manual`. */
    completion?: TrophyApi.GoalCompletion;
    /** When the goal is due, as an ISO 8601 date and time. Without an offset, it's in the user's timezone. Required with `completion: none`. */
    dueAt?: string;
    /** When the user completed the goal, if they already have, as an ISO 8601 date and time. Without an offset, it's in the user's timezone, and a time after now is read as now. Not with `completion: none`, which is never completed, or `completion: metric`, which completes when its metric reaches the target. */
    completedAt?: string;
    /** The metric's key, required with `completion: metric`. */
    metric?: string;
    /** The metric total that completes it, required with `completion: metric`. */
    target?: number;
    /** With `completion: metric`, the date, in the user's timezone, the metric total counts from. Defaults to today. */
    start?: string;
    /** The goal's steps, in order, each with its own key. */
    steps?: TrophyApi.GoalStepRequest[];
}
