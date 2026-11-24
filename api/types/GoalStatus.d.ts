/** `completed` when `completedAt` is set. Otherwise, once `dueAt` has passed, `missed` for a goal with `completion: manual` or `metric` and `ended` for one with `completion: none`. Otherwise `active`. */
export declare const GoalStatus: {
    readonly Active: "active";
    readonly Completed: "completed";
    readonly Missed: "missed";
    readonly Ended: "ended";
};
export type GoalStatus = (typeof GoalStatus)[keyof typeof GoalStatus];
