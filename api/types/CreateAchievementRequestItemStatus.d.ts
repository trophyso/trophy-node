/** The achievement status. Defaults to `inactive`. */
export declare const CreateAchievementRequestItemStatus: {
    readonly Active: "active";
    readonly Inactive: "inactive";
    readonly Locked: "locked";
};
export type CreateAchievementRequestItemStatus = (typeof CreateAchievementRequestItemStatus)[keyof typeof CreateAchievementRequestItemStatus];
