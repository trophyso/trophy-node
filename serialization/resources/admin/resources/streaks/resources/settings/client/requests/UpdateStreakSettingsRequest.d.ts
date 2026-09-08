import type * as TrophyApi from "../../../../../../../../../api/index";
import * as core from "../../../../../../../../../core";
import type * as serializers from "../../../../../../../../index";
import { AdminStreakEvaluationMode } from "../../../../../../../../types/AdminStreakEvaluationMode";
import { AdminStreakFrequency } from "../../../../../../../../types/AdminStreakFrequency";
import { StreakSettingsMetric } from "../../../../../../../../types/StreakSettingsMetric";
import { UpdateStreakSettingsFreezes } from "../../../../../../../../types/UpdateStreakSettingsFreezes";
export declare const UpdateStreakSettingsRequest: core.serialization.Schema<serializers.admin.streaks.UpdateStreakSettingsRequest.Raw, TrophyApi.admin.streaks.UpdateStreakSettingsRequest>;
export declare namespace UpdateStreakSettingsRequest {
    interface Raw {
        frequency?: AdminStreakFrequency.Raw | null;
        evaluationMode?: AdminStreakEvaluationMode.Raw | null;
        customizationEnabled?: boolean | null;
        daysOff?: number[] | null;
        metrics?: StreakSettingsMetric.Raw[] | null;
        freezes?: UpdateStreakSettingsFreezes.Raw | null;
    }
}
