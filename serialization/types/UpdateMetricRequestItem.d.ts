import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { UpdateMetricRequestItemUnitType } from "./UpdateMetricRequestItemUnitType";
export declare const UpdateMetricRequestItem: core.serialization.ObjectSchema<serializers.UpdateMetricRequestItem.Raw, TrophyApi.UpdateMetricRequestItem>;
export declare namespace UpdateMetricRequestItem {
    interface Raw {
        id: string;
        name?: string | null;
        unitType?: UpdateMetricRequestItemUnitType.Raw | null;
        units?: string | null;
    }
}
