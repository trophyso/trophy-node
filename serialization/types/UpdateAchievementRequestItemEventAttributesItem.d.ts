import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const UpdateAchievementRequestItemEventAttributesItem: core.serialization.ObjectSchema<serializers.UpdateAchievementRequestItemEventAttributesItem.Raw, TrophyApi.UpdateAchievementRequestItemEventAttributesItem>;
export declare namespace UpdateAchievementRequestItemEventAttributesItem {
    interface Raw {
        attributeId: string;
        attributeValue: string;
    }
}
