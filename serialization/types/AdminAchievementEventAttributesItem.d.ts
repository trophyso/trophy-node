import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const AdminAchievementEventAttributesItem: core.serialization.ObjectSchema<serializers.AdminAchievementEventAttributesItem.Raw, TrophyApi.AdminAchievementEventAttributesItem>;
export declare namespace AdminAchievementEventAttributesItem {
    interface Raw {
        attributeId: string;
        attributeValue: string;
    }
}
