import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { UpdatePointsSystemRequestItemBadge } from "./UpdatePointsSystemRequestItemBadge";
export declare const UpdatePointsSystemRequestItem: core.serialization.ObjectSchema<serializers.UpdatePointsSystemRequestItem.Raw, TrophyApi.UpdatePointsSystemRequestItem>;
export declare namespace UpdatePointsSystemRequestItem {
    interface Raw {
        id: string;
        name?: string | null;
        description?: string | null;
        badge?: UpdatePointsSystemRequestItemBadge.Raw | null;
        maxPoints?: number | null;
    }
}
