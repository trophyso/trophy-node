import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const AdminRewardUserAttributesItem: core.serialization.ObjectSchema<serializers.AdminRewardUserAttributesItem.Raw, TrophyApi.AdminRewardUserAttributesItem>;
export declare namespace AdminRewardUserAttributesItem {
    interface Raw {
        attributeId: string;
        attributeValue: string;
    }
}
