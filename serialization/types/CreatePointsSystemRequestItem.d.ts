import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { CreatePointsBoostRequestItem } from "./CreatePointsBoostRequestItem";
import { CreatePointsLevelRequestItem } from "./CreatePointsLevelRequestItem";
import { CreatePointsSystemRequestItemBadge } from "./CreatePointsSystemRequestItemBadge";
import { CreatePointsTriggerRequestItem } from "./CreatePointsTriggerRequestItem";
export declare const CreatePointsSystemRequestItem: core.serialization.ObjectSchema<serializers.CreatePointsSystemRequestItem.Raw, TrophyApi.CreatePointsSystemRequestItem>;
export declare namespace CreatePointsSystemRequestItem {
    interface Raw {
        name: string;
        key: string;
        description?: string | null;
        badge?: CreatePointsSystemRequestItemBadge.Raw | null;
        maxPoints?: number | null;
        levels?: CreatePointsLevelRequestItem.Raw[] | null;
        boosts?: CreatePointsBoostRequestItem.Raw[] | null;
        triggers?: CreatePointsTriggerRequestItem.Raw[] | null;
    }
}
