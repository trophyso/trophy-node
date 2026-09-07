import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const AdminAchievementUserAttributesItem: core.serialization.ObjectSchema<serializers.AdminAchievementUserAttributesItem.Raw, TrophyApi.AdminAchievementUserAttributesItem>;
export declare namespace AdminAchievementUserAttributesItem {
    interface Raw {
        attributeId: string;
        attributeValue: string;
    }
}
