import type * as TrophyApi from "../index";
/**
 * A user's goal or step.
 */
export interface GoalResponse {
    /** The goal's unique ID. A goal deleted and created again with the same key gets a new one. */
    id: string;
    /** The goal's key, unique per user. */
    key: string;
    /** What the goal is, as messages name it. */
    label?: string;
    completion: TrophyApi.GoalCompletion;
    /** When the goal is due, or null if it has no due time. */
    dueAt?: Date;
    /** When the user completed the goal, or null if they haven't. */
    completedAt?: Date;
    status: TrophyApi.GoalStatus;
    /** Its steps, in order. Empty for a goal without steps, and for a step. */
    steps: TrophyApi.GoalResponse[];
    /** How many of its steps are completed. */
    done: number;
    /** How many steps it has. */
    total: number;
    /** `completion: metric` only. The metric's key. */
    metric?: string;
    /** `completion: metric` only. The metric total that completes it. */
    target?: number;
    /** `completion: metric` only. The date, in the user's timezone, the metric total counts from. */
    start?: string;
    /** `completion: metric` only. The metric total since `start`. */
    current?: number;
    /** When the goal was created. */
    created: Date;
    /** When the goal was last changed. */
    updated: Date;
}
