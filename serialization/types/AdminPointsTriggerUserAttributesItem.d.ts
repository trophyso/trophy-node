import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const AdminPointsTriggerUserAttributesItem: core.serialization.ObjectSchema<serializers.AdminPointsTriggerUserAttributesItem.Raw, TrophyApi.AdminPointsTriggerUserAttributesItem>;
export declare namespace AdminPointsTriggerUserAttributesItem {
    interface Raw {
        attributeId: string;
        attributeValue: string;
    }
}
