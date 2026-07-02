import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const PointsTriggerEventAttribute: core.serialization.ObjectSchema<serializers.PointsTriggerEventAttribute.Raw, TrophyApi.PointsTriggerEventAttribute>;
export declare namespace PointsTriggerEventAttribute {
    interface Raw {
        key: string;
        value: string;
    }
}
