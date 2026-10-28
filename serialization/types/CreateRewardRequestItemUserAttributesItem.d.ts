import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const CreateRewardRequestItemUserAttributesItem: core.serialization.ObjectSchema<serializers.CreateRewardRequestItemUserAttributesItem.Raw, TrophyApi.CreateRewardRequestItemUserAttributesItem>;
export declare namespace CreateRewardRequestItemUserAttributesItem {
    interface Raw {
        attributeId: string;
        attributeValue: string;
    }
}
