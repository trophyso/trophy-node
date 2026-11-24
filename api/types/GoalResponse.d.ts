import type * as TrophyApi from "../index";
/**
 * A user's goal or step.
 */
export interface GoalResponse {
    /** The goal's key, unique per user. */
    key: string;
    /** What the goal is, as messages name it. */
    label?: string;
    completion: TrophyApi.GoalCompletion;
    /** When the goal is due, or null if it has no due time. */
    dueAt?: Date;
    /** When the user completed the goal, or null if they haven't. */
    completedAt?: Date;
    /** `completed` when `completedAt` is set. Otherwise, once `dueAt` has passed, `missed` for a goal with `completion: manual` or `metric` and `ended` for one with `completion: none`. Otherwise `active`. */
    status: TrophyApi.GoalResponseStatus;
    /** A goal with steps only. Its steps, in order. */
    steps?: TrophyApi.GoalResponse[];
    /** A goal with steps only. How many of its steps are completed. */
    done?: number;
    /** A goal with steps only. How many steps it has. */
    total?: number;
    /** `completion: metric` only. The metric's key. */
    metric?: string;
    /** `completion: metric` only. The metric total that completes it. */
    target?: number;
    /** `completion: metric` only. The date, in the user's timezone, the metric total counts from. */
    start?: string;
    /** `completion: metric` only. The metric total since `start`. */
    current?: number;
}
