import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { CreateMetricRequestItemUnitType } from "./CreateMetricRequestItemUnitType";
export declare const CreateMetricRequestItem: core.serialization.ObjectSchema<serializers.CreateMetricRequestItem.Raw, TrophyApi.CreateMetricRequestItem>;
export declare namespace CreateMetricRequestItem {
    interface Raw {
        name: string;
        key: string;
        unitType?: CreateMetricRequestItemUnitType.Raw | null;
        units?: string | null;
    }
}
