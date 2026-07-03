import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const AchievementResponseEventAttribute: core.serialization.ObjectSchema<serializers.AchievementResponseEventAttribute.Raw, TrophyApi.AchievementResponseEventAttribute>;
export declare namespace AchievementResponseEventAttribute {
    interface Raw {
        key: string;
        value: string;
    }
}
