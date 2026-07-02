import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { PointsTriggerEventAttribute } from "./PointsTriggerEventAttribute";
import { PointsTriggerEventAttributesItem } from "./PointsTriggerEventAttributesItem";
import { PointsTriggerStatus } from "./PointsTriggerStatus";
import { PointsTriggerTimeUnit } from "./PointsTriggerTimeUnit";
import { PointsTriggerType } from "./PointsTriggerType";
import { PointsTriggerUserAttributesItem } from "./PointsTriggerUserAttributesItem";
export declare const PointsTrigger: core.serialization.ObjectSchema<serializers.PointsTrigger.Raw, TrophyApi.PointsTrigger>;
export declare namespace PointsTrigger {
    interface Raw {
        id: string;
        type: PointsTriggerType.Raw;
        points: number;
        status: PointsTriggerStatus.Raw;
        achievementId?: string | null;
        metricId?: string | null;
        metricName?: string | null;
        metricThreshold?: number | null;
        streakLengthThreshold?: number | null;
        achievementName?: string | null;
        timeUnit?: PointsTriggerTimeUnit.Raw | null;
        timeInterval?: number | null;
        userAttributes: PointsTriggerUserAttributesItem.Raw[];
        eventAttribute?: PointsTriggerEventAttribute.Raw | null;
        eventAttributes?: PointsTriggerEventAttributesItem.Raw[] | null;
        created: string;
        updated: string;
    }
}
