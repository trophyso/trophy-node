import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const AdminPointsSystemBadge: core.serialization.ObjectSchema<serializers.AdminPointsSystemBadge.Raw, TrophyApi.AdminPointsSystemBadge>;
export declare namespace AdminPointsSystemBadge {
    interface Raw {
        url: string;
    }
}
