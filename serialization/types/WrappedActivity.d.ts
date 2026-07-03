import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { WrappedEntireYear } from "./WrappedEntireYear";
import { WrappedMostActiveDay } from "./WrappedMostActiveDay";
import { WrappedMostActiveMonth } from "./WrappedMostActiveMonth";
import { WrappedMostActiveWeek } from "./WrappedMostActiveWeek";
export declare const WrappedActivity: core.serialization.ObjectSchema<serializers.WrappedActivity.Raw, TrophyApi.WrappedActivity>;
export declare namespace WrappedActivity {
    interface Raw {
        daysActive: number;
        weeksActive: number;
        monthsActive: number;
        mostActiveDay: WrappedMostActiveDay.Raw;
        mostActiveWeek: WrappedMostActiveWeek.Raw;
        mostActiveMonth: WrappedMostActiveMonth.Raw;
        entireYear: WrappedEntireYear.Raw;
    }
}
