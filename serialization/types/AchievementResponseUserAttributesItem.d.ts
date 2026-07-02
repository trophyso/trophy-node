import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const AchievementResponseUserAttributesItem: core.serialization.ObjectSchema<serializers.AchievementResponseUserAttributesItem.Raw, TrophyApi.AchievementResponseUserAttributesItem>;
export declare namespace AchievementResponseUserAttributesItem {
    interface Raw {
        key: string;
        value: string;
    }
}
