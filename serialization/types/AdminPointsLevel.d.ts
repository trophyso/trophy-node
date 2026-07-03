import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AdminPointsLevelBadge } from "./AdminPointsLevelBadge";
export declare const AdminPointsLevel: core.serialization.ObjectSchema<serializers.AdminPointsLevel.Raw, TrophyApi.AdminPointsLevel>;
export declare namespace AdminPointsLevel {
    interface Raw {
        id: string;
        name: string;
        key: string;
        points: number;
        description: string;
        badge?: AdminPointsLevelBadge.Raw | null;
    }
}
