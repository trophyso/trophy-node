import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const StreakSettingsFreezes: core.serialization.ObjectSchema<serializers.StreakSettingsFreezes.Raw, TrophyApi.StreakSettingsFreezes>;
export declare namespace StreakSettingsFreezes {
    interface Raw {
        startCount: number;
        maxCount: number;
        autoEarnInterval?: number | null;
        autoEarnAmount?: number | null;
    }
}
