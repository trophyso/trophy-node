import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { PointsBoost } from "./PointsBoost";
import { PointsTrigger } from "./PointsTrigger";
export declare const PointsAward: core.serialization.ObjectSchema<serializers.PointsAward.Raw, TrophyApi.PointsAward>;
export declare namespace PointsAward {
    interface Raw {
        id?: string | null;
        awarded?: number | null;
        date?: string | null;
        total?: number | null;
        trigger?: PointsTrigger.Raw | null;
        boosts?: PointsBoost.Raw[] | null;
    }
}
