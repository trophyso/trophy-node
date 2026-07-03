import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const CreatePointsTriggerRequestItemEventAttributesItem: core.serialization.ObjectSchema<serializers.CreatePointsTriggerRequestItemEventAttributesItem.Raw, TrophyApi.CreatePointsTriggerRequestItemEventAttributesItem>;
export declare namespace CreatePointsTriggerRequestItemEventAttributesItem {
    interface Raw {
        attributeId: string;
        attributeValue: string;
    }
}
