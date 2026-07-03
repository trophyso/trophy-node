import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { WrappedActivityPeriod } from "./WrappedActivityPeriod";
import { WrappedStreak } from "./WrappedStreak";
export declare const WrappedEntireYear: core.serialization.ObjectSchema<serializers.WrappedEntireYear.Raw, TrophyApi.WrappedEntireYear>;
export declare namespace WrappedEntireYear {
    interface Raw extends WrappedActivityPeriod.Raw {
        longestStreak: WrappedStreak.Raw;
    }
}
