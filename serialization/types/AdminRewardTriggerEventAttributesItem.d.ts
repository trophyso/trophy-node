import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const AdminRewardTriggerEventAttributesItem: core.serialization.ObjectSchema<serializers.AdminRewardTriggerEventAttributesItem.Raw, TrophyApi.AdminRewardTriggerEventAttributesItem>;
export declare namespace AdminRewardTriggerEventAttributesItem {
    interface Raw {
        attributeId: string;
        attributeValue: string;
    }
}
