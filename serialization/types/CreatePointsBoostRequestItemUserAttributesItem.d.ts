import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const CreatePointsBoostRequestItemUserAttributesItem: core.serialization.ObjectSchema<serializers.CreatePointsBoostRequestItemUserAttributesItem.Raw, TrophyApi.CreatePointsBoostRequestItemUserAttributesItem>;
export declare namespace CreatePointsBoostRequestItemUserAttributesItem {
    interface Raw {
        attributeId: string;
        attributeValue: string;
    }
}
