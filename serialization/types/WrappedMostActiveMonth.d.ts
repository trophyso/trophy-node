import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { WrappedActivityPeriod } from "./WrappedActivityPeriod";
export declare const WrappedMostActiveMonth: core.serialization.ObjectSchema<serializers.WrappedMostActiveMonth.Raw, TrophyApi.WrappedMostActiveMonth>;
export declare namespace WrappedMostActiveMonth {
    interface Raw extends WrappedActivityPeriod.Raw {
        month: number;
    }
}
