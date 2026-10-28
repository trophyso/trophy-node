import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const UpdateRewardRequestItemUserAttributesItem: core.serialization.ObjectSchema<serializers.UpdateRewardRequestItemUserAttributesItem.Raw, TrophyApi.UpdateRewardRequestItemUserAttributesItem>;
export declare namespace UpdateRewardRequestItemUserAttributesItem {
    interface Raw {
        attributeId: string;
        attributeValue: string;
    }
}
