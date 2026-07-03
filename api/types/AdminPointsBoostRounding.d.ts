/** How boosted points are rounded. */
export declare const AdminPointsBoostRounding: {
    readonly Down: "down";
    readonly Up: "up";
    readonly Nearest: "nearest";
};
export type AdminPointsBoostRounding = (typeof AdminPointsBoostRounding)[keyof typeof AdminPointsBoostRounding];
