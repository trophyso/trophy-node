import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const PointsResponse: core.serialization.ObjectSchema<serializers.PointsResponse.Raw, TrophyApi.PointsResponse>;
export declare namespace PointsResponse {
    interface Raw {
        id: string;
        key: string;
        name: string;
        description?: string | null;
        badgeUrl?: string | null;
        maxPoints?: number | null;
    }
}
