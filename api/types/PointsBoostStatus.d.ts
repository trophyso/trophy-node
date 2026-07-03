/** The status of the points boost */
export declare const PointsBoostStatus: {
    readonly Active: "active";
    readonly Scheduled: "scheduled";
    readonly Finished: "finished";
};
export type PointsBoostStatus = (typeof PointsBoostStatus)[keyof typeof PointsBoostStatus];
