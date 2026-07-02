/** How to round the boosted points. Defaults to 'down'. */
export declare const CreatePointsBoostRequestItemRounding: {
    readonly Down: "down";
    readonly Up: "up";
    readonly Nearest: "nearest";
};
export type CreatePointsBoostRequestItemRounding = (typeof CreatePointsBoostRequestItemRounding)[keyof typeof CreatePointsBoostRequestItemRounding];
