import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { PointsTrigger } from "./PointsTrigger";
export declare const PointsSystemResponse: core.serialization.ObjectSchema<serializers.PointsSystemResponse.Raw, TrophyApi.PointsSystemResponse>;
export declare namespace PointsSystemResponse {
    interface Raw {
        id: string;
        name: string;
        description?: string | null;
        badgeUrl?: string | null;
        maxPoints?: number | null;
        triggers: PointsTrigger.Raw[];
    }
}
