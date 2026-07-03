/** The status of the boost. */
export declare const AdminPointsBoostStatus: {
    readonly Active: "active";
    readonly Scheduled: "scheduled";
    readonly Finished: "finished";
};
export type AdminPointsBoostStatus = (typeof AdminPointsBoostStatus)[keyof typeof AdminPointsBoostStatus];
