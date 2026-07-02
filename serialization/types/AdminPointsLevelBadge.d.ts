import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const AdminPointsLevelBadge: core.serialization.ObjectSchema<serializers.AdminPointsLevelBadge.Raw, TrophyApi.AdminPointsLevelBadge>;
export declare namespace AdminPointsLevelBadge {
    interface Raw {
        url: string;
    }
}
