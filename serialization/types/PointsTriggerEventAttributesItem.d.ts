import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const PointsTriggerEventAttributesItem: core.serialization.ObjectSchema<serializers.PointsTriggerEventAttributesItem.Raw, TrophyApi.PointsTriggerEventAttributesItem>;
export declare namespace PointsTriggerEventAttributesItem {
    interface Raw {
        key: string;
        value: string;
    }
}
