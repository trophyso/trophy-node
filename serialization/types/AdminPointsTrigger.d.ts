import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AdminPointsTriggerEventAttributesItem } from "./AdminPointsTriggerEventAttributesItem";
import { AdminPointsTriggerStatus } from "./AdminPointsTriggerStatus";
import { AdminPointsTriggerTimeUnit } from "./AdminPointsTriggerTimeUnit";
import { AdminPointsTriggerType } from "./AdminPointsTriggerType";
import { AdminPointsTriggerUserAttributesItem } from "./AdminPointsTriggerUserAttributesItem";
export declare const AdminPointsTrigger: core.serialization.ObjectSchema<serializers.AdminPointsTrigger.Raw, TrophyApi.AdminPointsTrigger>;
export declare namespace AdminPointsTrigger {
    interface Raw {
        id: string;
        type: AdminPointsTriggerType.Raw;
        points: number;
        status: AdminPointsTriggerStatus.Raw;
        userAttributes: AdminPointsTriggerUserAttributesItem.Raw[];
        metricId?: string | null;
        metricThreshold?: number | null;
        eventAttributes?: AdminPointsTriggerEventAttributesItem.Raw[] | null;
        achievementId?: string | null;
        streakLength?: number | null;
        timeUnit?: AdminPointsTriggerTimeUnit.Raw | null;
        timeInterval?: number | null;
        blockIfOutOfPoints: boolean;
    }
}
