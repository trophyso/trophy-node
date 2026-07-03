import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const CreatePointsTriggerRequestItemUserAttributesItem: core.serialization.ObjectSchema<serializers.CreatePointsTriggerRequestItemUserAttributesItem.Raw, TrophyApi.CreatePointsTriggerRequestItemUserAttributesItem>;
export declare namespace CreatePointsTriggerRequestItemUserAttributesItem {
    interface Raw {
        attributeId: string;
        attributeValue: string;
    }
}
