import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { PatchPointsBoostsRequestItemRounding } from "./PatchPointsBoostsRequestItemRounding";
import { PatchPointsBoostsRequestItemUserAttributesItem } from "./PatchPointsBoostsRequestItemUserAttributesItem";
export declare const PatchPointsBoostsRequestItem: core.serialization.ObjectSchema<serializers.PatchPointsBoostsRequestItem.Raw, TrophyApi.PatchPointsBoostsRequestItem>;
export declare namespace PatchPointsBoostsRequestItem {
    interface Raw {
        id: string;
        name?: string | null;
        start?: string | null;
        end?: string | null;
        multiplier?: number | null;
        rounding?: PatchPointsBoostsRequestItemRounding.Raw | null;
        userAttributes?: PatchPointsBoostsRequestItemUserAttributesItem.Raw[] | null;
    }
}
