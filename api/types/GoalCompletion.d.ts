/** How a goal is completed. `manual`: you mark it completed, for something the user finishes, like an essay. `none`: never completed, for a date the user works towards, like an exam. `metric`: completed when a metric's total since `start` reaches `target`, like 50 lessons. */
export declare const GoalCompletion: {
    readonly Manual: "manual";
    readonly None: "none";
    readonly Metric: "metric";
};
export type GoalCompletion = (typeof GoalCompletion)[keyof typeof GoalCompletion];
