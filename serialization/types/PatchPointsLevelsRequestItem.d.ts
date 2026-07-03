import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { PatchPointsLevelsRequestItemBadge } from "./PatchPointsLevelsRequestItemBadge";
export declare const PatchPointsLevelsRequestItem: core.serialization.ObjectSchema<serializers.PatchPointsLevelsRequestItem.Raw, TrophyApi.PatchPointsLevelsRequestItem>;
export declare namespace PatchPointsLevelsRequestItem {
    interface Raw {
        id: string;
        name?: string | null;
        points?: number | null;
        description?: string | null;
        badge?: PatchPointsLevelsRequestItemBadge.Raw | null;
    }
}
