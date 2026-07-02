import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const PatchPointsTriggersRequestItemEventAttributesItem: core.serialization.ObjectSchema<serializers.PatchPointsTriggersRequestItemEventAttributesItem.Raw, TrophyApi.PatchPointsTriggersRequestItemEventAttributesItem>;
export declare namespace PatchPointsTriggersRequestItemEventAttributesItem {
    interface Raw {
        attributeId: string;
        attributeValue: string;
    }
}
