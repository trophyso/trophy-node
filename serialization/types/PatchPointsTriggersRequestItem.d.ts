import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { PatchPointsTriggersRequestItemEventAttributesItem } from "./PatchPointsTriggersRequestItemEventAttributesItem";
import { PatchPointsTriggersRequestItemStatus } from "./PatchPointsTriggersRequestItemStatus";
import { PatchPointsTriggersRequestItemTimeUnit } from "./PatchPointsTriggersRequestItemTimeUnit";
import { PatchPointsTriggersRequestItemType } from "./PatchPointsTriggersRequestItemType";
import { PatchPointsTriggersRequestItemUserAttributesItem } from "./PatchPointsTriggersRequestItemUserAttributesItem";
export declare const PatchPointsTriggersRequestItem: core.serialization.ObjectSchema<serializers.PatchPointsTriggersRequestItem.Raw, TrophyApi.PatchPointsTriggersRequestItem>;
export declare namespace PatchPointsTriggersRequestItem {
    interface Raw {
        id: string;
        type?: PatchPointsTriggersRequestItemType.Raw | null;
        points?: number | null;
        status?: PatchPointsTriggersRequestItemStatus.Raw | null;
        userAttributes?: PatchPointsTriggersRequestItemUserAttributesItem.Raw[] | null;
        metricId?: string | null;
        metricThreshold?: number | null;
        eventAttributes?: PatchPointsTriggersRequestItemEventAttributesItem.Raw[] | null;
        achievementId?: string | null;
        streakLength?: number | null;
        timeUnit?: PatchPointsTriggersRequestItemTimeUnit.Raw | null;
        timeInterval?: number | null;
        blockIfOutOfPoints?: boolean | null;
    }
}
