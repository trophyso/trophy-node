import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AdminStreakEvaluationMode } from "./AdminStreakEvaluationMode";
import { AdminStreakFrequency } from "./AdminStreakFrequency";
import { StreakSettingsFreezes } from "./StreakSettingsFreezes";
import { StreakSettingsMetric } from "./StreakSettingsMetric";
export declare const StreakSettings: core.serialization.ObjectSchema<serializers.StreakSettings.Raw, TrophyApi.StreakSettings>;
export declare namespace StreakSettings {
    interface Raw {
        frequency: AdminStreakFrequency.Raw;
        evaluationMode: AdminStreakEvaluationMode.Raw;
        customizationEnabled: boolean;
        daysOff: number[];
        metrics: StreakSettingsMetric.Raw[];
        freezes?: StreakSettingsFreezes.Raw | null;
    }
}
