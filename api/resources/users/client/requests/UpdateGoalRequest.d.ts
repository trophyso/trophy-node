import type * as TrophyApi from "../../../../index";
/**
 * @example
 *     {
 *         completedAt: "2026-11-12T14:21:08Z"
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
    /** When the user completed the goal, as an ISO 8601 date and time. Without an offset, it's in the user's timezone, and a time after now is read as now. Null uncompletes it. Not with `completion: none`, which is never completed, or `completion: metric`, which completes when its metric reaches the target. */
    completedAt?: string;
    /** `completion: metric` only. The metric's key. Changing the metric, target or start checks the goal against its target again, which can complete or uncomplete it; other changes leave a completed goal completed. */
    metric?: string;
    /** `completion: metric` only. The metric total that completes it. */
    target?: number;
    /** `completion: metric` only. The date, in the user's timezone, the metric total counts from. */
    start?: string;
    /** Replaces the goal's steps, in order: a step whose key the goal has is updated, the others are added, and steps left out are deleted. Not for a step, since steps are one level deep. */
    steps?: TrophyApi.GoalStepRequest[];
}
