import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { WrappedActivityPeriod } from "./WrappedActivityPeriod";
export declare const WrappedMostActiveDay: core.serialization.ObjectSchema<serializers.WrappedMostActiveDay.Raw, TrophyApi.WrappedMostActiveDay>;
export declare namespace WrappedMostActiveDay {
    interface Raw extends WrappedActivityPeriod.Raw {
        date: string;
    }
}
