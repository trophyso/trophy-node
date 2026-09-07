import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const UpdateStreakSettingsFreezes: core.serialization.ObjectSchema<serializers.UpdateStreakSettingsFreezes.Raw, TrophyApi.UpdateStreakSettingsFreezes>;
export declare namespace UpdateStreakSettingsFreezes {
    interface Raw {
        startCount: number;
        maxCount: number;
        autoEarnInterval?: number | null;
        autoEarnAmount?: number | null;
    }
}
