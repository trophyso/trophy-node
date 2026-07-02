import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const StreakMetricPreference: core.serialization.ObjectSchema<serializers.StreakMetricPreference.Raw, TrophyApi.StreakMetricPreference>;
export declare namespace StreakMetricPreference {
    interface Raw {
        key: string;
        threshold: number;
    }
}
