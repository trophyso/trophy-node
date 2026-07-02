import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { WrappedActivityPeriod } from "./WrappedActivityPeriod";
export declare const WrappedMostActiveWeek: core.serialization.ObjectSchema<serializers.WrappedMostActiveWeek.Raw, TrophyApi.WrappedMostActiveWeek>;
export declare namespace WrappedMostActiveWeek {
    interface Raw extends WrappedActivityPeriod.Raw {
        start: string;
        end: string;
    }
}
