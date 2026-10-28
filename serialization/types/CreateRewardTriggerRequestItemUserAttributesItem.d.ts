import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const CreateRewardTriggerRequestItemUserAttributesItem: core.serialization.ObjectSchema<serializers.CreateRewardTriggerRequestItemUserAttributesItem.Raw, TrophyApi.CreateRewardTriggerRequestItemUserAttributesItem>;
export declare namespace CreateRewardTriggerRequestItemUserAttributesItem {
    interface Raw {
        attributeId: string;
        attributeValue: string;
    }
}
