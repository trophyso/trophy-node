import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const AdminPointsTriggerEventAttributesItem: core.serialization.ObjectSchema<serializers.AdminPointsTriggerEventAttributesItem.Raw, TrophyApi.AdminPointsTriggerEventAttributesItem>;
export declare namespace AdminPointsTriggerEventAttributesItem {
    interface Raw {
        attributeId: string;
        attributeValue: string;
    }
}
