import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { StreakFrequency } from "./StreakFrequency";
export declare const WrappedStreak: core.serialization.ObjectSchema<serializers.WrappedStreak.Raw, TrophyApi.WrappedStreak>;
export declare namespace WrappedStreak {
    interface Raw {
        length: number;
        frequency: StreakFrequency.Raw;
        periodStart?: string | null;
        periodEnd?: string | null;
        started?: string | null;
    }
}
