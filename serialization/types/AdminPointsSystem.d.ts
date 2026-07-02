import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AdminPointsSystemBadge } from "./AdminPointsSystemBadge";
import { AdminPointsSystemStatus } from "./AdminPointsSystemStatus";
export declare const AdminPointsSystem: core.serialization.ObjectSchema<serializers.AdminPointsSystem.Raw, TrophyApi.AdminPointsSystem>;
export declare namespace AdminPointsSystem {
    interface Raw {
        id: string;
        name: string;
        key: string;
        description: string;
        status: AdminPointsSystemStatus.Raw;
        badge?: AdminPointsSystemBadge.Raw | null;
        maxPoints?: number | null;
    }
}
