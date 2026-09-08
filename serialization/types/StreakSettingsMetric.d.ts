import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const StreakSettingsMetric: core.serialization.ObjectSchema<serializers.StreakSettingsMetric.Raw, TrophyApi.StreakSettingsMetric>;
export declare namespace StreakSettingsMetric {
    interface Raw {
        key: string;
        threshold: number;
    }
}
