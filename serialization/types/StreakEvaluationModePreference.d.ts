import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const StreakEvaluationModePreference: core.serialization.Schema<serializers.StreakEvaluationModePreference.Raw, TrophyApi.StreakEvaluationModePreference>;
export declare namespace StreakEvaluationModePreference {
    type Raw = "OR" | "AND";
}
