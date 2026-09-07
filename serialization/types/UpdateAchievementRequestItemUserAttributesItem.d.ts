import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const UpdateAchievementRequestItemUserAttributesItem: core.serialization.ObjectSchema<serializers.UpdateAchievementRequestItemUserAttributesItem.Raw, TrophyApi.UpdateAchievementRequestItemUserAttributesItem>;
export declare namespace UpdateAchievementRequestItemUserAttributesItem {
    interface Raw {
        attributeId: string;
        attributeValue: string;
    }
}
