import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const UpdateRewardTriggersRequestItemEventAttributesItem: core.serialization.ObjectSchema<serializers.UpdateRewardTriggersRequestItemEventAttributesItem.Raw, TrophyApi.UpdateRewardTriggersRequestItemEventAttributesItem>;
export declare namespace UpdateRewardTriggersRequestItemEventAttributesItem {
    interface Raw {
        attributeId: string;
        attributeValue: string;
    }
}
