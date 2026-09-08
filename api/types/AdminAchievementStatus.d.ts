/** The achievement status. */
export declare const AdminAchievementStatus: {
    readonly Active: "active";
    readonly Inactive: "inactive";
    readonly Locked: "locked";
};
export type AdminAchievementStatus = (typeof AdminAchievementStatus)[keyof typeof AdminAchievementStatus];
