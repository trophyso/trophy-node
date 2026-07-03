import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { CreatePointsTriggerRequestItemEventAttributesItem } from "./CreatePointsTriggerRequestItemEventAttributesItem";
import { CreatePointsTriggerRequestItemStatus } from "./CreatePointsTriggerRequestItemStatus";
import { CreatePointsTriggerRequestItemTimeUnit } from "./CreatePointsTriggerRequestItemTimeUnit";
import { CreatePointsTriggerRequestItemType } from "./CreatePointsTriggerRequestItemType";
import { CreatePointsTriggerRequestItemUserAttributesItem } from "./CreatePointsTriggerRequestItemUserAttributesItem";
export declare const CreatePointsTriggerRequestItem: core.serialization.ObjectSchema<serializers.CreatePointsTriggerRequestItem.Raw, TrophyApi.CreatePointsTriggerRequestItem>;
export declare namespace CreatePointsTriggerRequestItem {
    interface Raw {
        type: CreatePointsTriggerRequestItemType.Raw;
        points: number;
        status?: CreatePointsTriggerRequestItemStatus.Raw | null;
        userAttributes?: CreatePointsTriggerRequestItemUserAttributesItem.Raw[] | null;
        metricId?: string | null;
        metricThreshold?: number | null;
        eventAttributes?: CreatePointsTriggerRequestItemEventAttributesItem.Raw[] | null;
        achievementId?: string | null;
        streakLength?: number | null;
        timeUnit?: CreatePointsTriggerRequestItemTimeUnit.Raw | null;
        timeInterval?: number | null;
        blockIfOutOfPoints?: boolean | null;
    }
}
