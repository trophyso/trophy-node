import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const CreateAchievementRequestItemEventAttributesItem: core.serialization.ObjectSchema<serializers.CreateAchievementRequestItemEventAttributesItem.Raw, TrophyApi.CreateAchievementRequestItemEventAttributesItem>;
export declare namespace CreateAchievementRequestItemEventAttributesItem {
    interface Raw {
        attributeId: string;
        attributeValue: string;
    }
}
