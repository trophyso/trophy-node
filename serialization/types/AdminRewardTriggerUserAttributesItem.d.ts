import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const AdminRewardTriggerUserAttributesItem: core.serialization.ObjectSchema<serializers.AdminRewardTriggerUserAttributesItem.Raw, TrophyApi.AdminRewardTriggerUserAttributesItem>;
export declare namespace AdminRewardTriggerUserAttributesItem {
    interface Raw {
        attributeId: string;
        attributeValue: string;
    }
}
