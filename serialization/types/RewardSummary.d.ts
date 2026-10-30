import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { RewardSummaryType } from "./RewardSummaryType";
export declare const RewardSummary: core.serialization.ObjectSchema<serializers.RewardSummary.Raw, TrophyApi.RewardSummary>;
export declare namespace RewardSummary {
    interface Raw {
        id: string;
        key: string;
        name: string;
        description?: string | null;
        type: RewardSummaryType.Raw;
        points?: number | null;
        pointsSystemId?: string | null;
        pointsSystemKey?: string | null;
    }
}
