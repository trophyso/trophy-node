import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const AdminPointsBoostUserAttributesItem: core.serialization.ObjectSchema<serializers.AdminPointsBoostUserAttributesItem.Raw, TrophyApi.AdminPointsBoostUserAttributesItem>;
export declare namespace AdminPointsBoostUserAttributesItem {
    interface Raw {
        attributeId: string;
        attributeValue: string;
    }
}
