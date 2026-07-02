/** The rounding method of the points boost */
export declare const PointsBoostRounding: {
    readonly Down: "down";
    readonly Up: "up";
    readonly Nearest: "nearest";
};
export type PointsBoostRounding = (typeof PointsBoostRounding)[keyof typeof PointsBoostRounding];
