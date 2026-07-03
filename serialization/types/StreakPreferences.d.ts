import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { StreakEvaluationModePreference } from "./StreakEvaluationModePreference";
import { StreakMetricPreference } from "./StreakMetricPreference";
export declare const StreakPreferences: core.serialization.ObjectSchema<serializers.StreakPreferences.Raw, TrophyApi.StreakPreferences>;
export declare namespace StreakPreferences {
    interface Raw {
        enabled?: boolean | null;
        evaluationMode?: StreakEvaluationModePreference.Raw | null;
        metrics?: StreakMetricPreference.Raw[] | null;
    }
}
