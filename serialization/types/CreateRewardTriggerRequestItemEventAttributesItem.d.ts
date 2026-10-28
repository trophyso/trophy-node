import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const CreateRewardTriggerRequestItemEventAttributesItem: core.serialization.ObjectSchema<serializers.CreateRewardTriggerRequestItemEventAttributesItem.Raw, TrophyApi.CreateRewardTriggerRequestItemEventAttributesItem>;
export declare namespace CreateRewardTriggerRequestItemEventAttributesItem {
    interface Raw {
        attributeId: string;
        attributeValue: string;
    }
}
