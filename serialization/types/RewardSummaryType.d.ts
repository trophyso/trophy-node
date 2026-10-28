import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const RewardSummaryType: core.serialization.Schema<serializers.RewardSummaryType.Raw, TrophyApi.RewardSummaryType>;
export declare namespace RewardSummaryType {
    type Raw = "points" | "custom";
}
