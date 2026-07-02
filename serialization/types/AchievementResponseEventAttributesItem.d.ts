import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const AchievementResponseEventAttributesItem: core.serialization.ObjectSchema<serializers.AchievementResponseEventAttributesItem.Raw, TrophyApi.AchievementResponseEventAttributesItem>;
export declare namespace AchievementResponseEventAttributesItem {
    interface Raw {
        key: string;
        value: string;
    }
}
