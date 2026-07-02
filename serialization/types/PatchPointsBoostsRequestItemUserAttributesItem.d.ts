import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const PatchPointsBoostsRequestItemUserAttributesItem: core.serialization.ObjectSchema<serializers.PatchPointsBoostsRequestItemUserAttributesItem.Raw, TrophyApi.PatchPointsBoostsRequestItemUserAttributesItem>;
export declare namespace PatchPointsBoostsRequestItemUserAttributesItem {
    interface Raw {
        attributeId: string;
        attributeValue: string;
    }
}
