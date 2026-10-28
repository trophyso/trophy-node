import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const UpdateRewardTriggersRequestItemUserAttributesItem: core.serialization.ObjectSchema<serializers.UpdateRewardTriggersRequestItemUserAttributesItem.Raw, TrophyApi.UpdateRewardTriggersRequestItemUserAttributesItem>;
export declare namespace UpdateRewardTriggersRequestItemUserAttributesItem {
    interface Raw {
        attributeId: string;
        attributeValue: string;
    }
}
