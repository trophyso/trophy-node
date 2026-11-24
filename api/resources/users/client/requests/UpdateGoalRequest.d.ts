import type * as TrophyApi from "../../../../index";
/**
 * @example
 *     {
 *         completed: true
 *     }
 *
 * @example
 *     {
 *         dueAt: "2026-11-13T17:00:00Z"
 *     }
 *
 * @example
 *     {
 *         steps: [{
 *                 key: "unit-1"
 *             }, {
 *                 key: "unit-2",
 *                 dueAt: "2026-11-15T09:00:00Z"
 *             }, {
 *                 key: "unit-3",
 *                 label: "Unit 3 listening"
 *             }]
 *     }
 */
export interface UpdateGoalRequest {
    /** What the goal is, as messages name it. Null clears it. */
    label?: string;
    /** How the goal is completed. Changing it to `none` uncompletes the goal, and needs it to have a `dueAt`; changing it to `metric` needs a `metric` and `target`. */
    completion?: TrophyApi.GoalCompletion;
    /** When the goal is due, as an ISO 8601 date and time. Without an offset, it's in the user's timezone. Null clears it, except with `completion: none`. */
    dueAt?: string;
    /** Whether the user has completed the goal. `true` on a completed goal keeps when it was completed. Only `false` with `completion: none`, and not with `completion: metric`. */
    completed?: boolean;
    /** The metric's key, with `completion: metric`. Changing the metric, target or start checks the goal against its target again. */
    metric?: string;
    /** The metric total that completes it, with `completion: metric`. */
    target?: number;
    /** With `completion: metric`, the date, in the user's timezone, the metric total counts from. */
    start?: string;
    /** Replaces the goal's steps, in order: a step whose key the goal has is updated, the others are added, and steps left out are deleted. Not for a step, since steps are one level deep. */
    steps?: TrophyApi.GoalStepRequest[];
}
