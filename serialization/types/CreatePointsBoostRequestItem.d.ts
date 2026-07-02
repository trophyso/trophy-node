import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { CreatePointsBoostRequestItemRounding } from "./CreatePointsBoostRequestItemRounding";
import { CreatePointsBoostRequestItemUserAttributesItem } from "./CreatePointsBoostRequestItemUserAttributesItem";
export declare const CreatePointsBoostRequestItem: core.serialization.ObjectSchema<serializers.CreatePointsBoostRequestItem.Raw, TrophyApi.CreatePointsBoostRequestItem>;
export declare namespace CreatePointsBoostRequestItem {
    interface Raw {
        userId?: string | null;
        name: string;
        start: string;
        end?: string | null;
        multiplier: number;
        rounding?: CreatePointsBoostRequestItemRounding.Raw | null;
        userAttributes?: CreatePointsBoostRequestItemUserAttributesItem.Raw[] | null;
    }
}
