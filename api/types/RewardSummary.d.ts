import type * as TrophyApi from "../index";
export interface RewardSummary {
    id: string;
    key: string;
    name: string;
    description?: string;
    type: TrophyApi.RewardSummaryType;
    points?: number;
    pointsSystemId?: string;
    pointsSystemKey?: string;
}
