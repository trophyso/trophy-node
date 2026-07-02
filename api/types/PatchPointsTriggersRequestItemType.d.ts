/** Updated trigger type. Can only be changed when the trigger is inactive. Required fields for the new type must be provided. */
export declare const PatchPointsTriggersRequestItemType: {
    readonly Metric: "metric";
    readonly Achievement: "achievement";
    readonly Streak: "streak";
    readonly Time: "time";
    readonly UserCreation: "user_creation";
};
export type PatchPointsTriggersRequestItemType = (typeof PatchPointsTriggersRequestItemType)[keyof typeof PatchPointsTriggersRequestItemType];
