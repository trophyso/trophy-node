import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const PointsLevel: core.serialization.ObjectSchema<serializers.PointsLevel.Raw, TrophyApi.PointsLevel>;
export declare namespace PointsLevel {
    interface Raw {
        id: string;
        key: string;
        name: string;
        description: string;
        badgeUrl?: string | null;
        points: number;
    }
}
