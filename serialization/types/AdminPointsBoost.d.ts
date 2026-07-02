import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AdminPointsBoostRounding } from "./AdminPointsBoostRounding";
import { AdminPointsBoostStatus } from "./AdminPointsBoostStatus";
import { AdminPointsBoostUserAttributesItem } from "./AdminPointsBoostUserAttributesItem";
export declare const AdminPointsBoost: core.serialization.ObjectSchema<serializers.AdminPointsBoost.Raw, TrophyApi.AdminPointsBoost>;
export declare namespace AdminPointsBoost {
    interface Raw {
        id: string;
        name: string;
        status: AdminPointsBoostStatus.Raw;
        start: string;
        end?: string | null;
        multiplier: number;
        rounding: AdminPointsBoostRounding.Raw;
        userId?: string | null;
        userAttributes?: AdminPointsBoostUserAttributesItem.Raw[] | null;
    }
}
