import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { CreatedMetricUnitType } from "./CreatedMetricUnitType";
export declare const CreatedMetric: core.serialization.ObjectSchema<serializers.CreatedMetric.Raw, TrophyApi.CreatedMetric>;
export declare namespace CreatedMetric {
    interface Raw {
        id: string;
        name: string;
        key: string;
        unitType: CreatedMetricUnitType.Raw;
        units: string;
    }
}
