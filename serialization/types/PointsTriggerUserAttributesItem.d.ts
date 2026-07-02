import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const PointsTriggerUserAttributesItem: core.serialization.ObjectSchema<serializers.PointsTriggerUserAttributesItem.Raw, TrophyApi.PointsTriggerUserAttributesItem>;
export declare namespace PointsTriggerUserAttributesItem {
    interface Raw {
        key: string;
        value: string;
    }
}
