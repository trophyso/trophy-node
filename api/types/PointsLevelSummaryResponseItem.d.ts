import type * as TrophyApi from "../index";
export interface PointsLevelSummaryResponseItem {
    level: TrophyApi.PointsLevel;
    /** The number of users currently at this level */
    users: number;
}
