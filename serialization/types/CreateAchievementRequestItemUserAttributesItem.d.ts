import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const CreateAchievementRequestItemUserAttributesItem: core.serialization.ObjectSchema<serializers.CreateAchievementRequestItemUserAttributesItem.Raw, TrophyApi.CreateAchievementRequestItemUserAttributesItem>;
export declare namespace CreateAchievementRequestItemUserAttributesItem {
    interface Raw {
        attributeId: string;
        attributeValue: string;
    }
}
