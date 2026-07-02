import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const PatchPointsTriggersRequestItemUserAttributesItem: core.serialization.ObjectSchema<serializers.PatchPointsTriggersRequestItemUserAttributesItem.Raw, TrophyApi.PatchPointsTriggersRequestItemUserAttributesItem>;
export declare namespace PatchPointsTriggersRequestItemUserAttributesItem {
    interface Raw {
        attributeId: string;
        attributeValue: string;
    }
}
