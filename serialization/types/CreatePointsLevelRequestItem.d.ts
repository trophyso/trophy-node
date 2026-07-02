import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { CreatePointsLevelRequestItemBadge } from "./CreatePointsLevelRequestItemBadge";
export declare const CreatePointsLevelRequestItem: core.serialization.ObjectSchema<serializers.CreatePointsLevelRequestItem.Raw, TrophyApi.CreatePointsLevelRequestItem>;
export declare namespace CreatePointsLevelRequestItem {
    interface Raw {
        name: string;
        key: string;
        points: number;
        description?: string | null;
        badge?: CreatePointsLevelRequestItemBadge.Raw | null;
    }
}
