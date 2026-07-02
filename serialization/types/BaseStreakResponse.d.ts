import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { StreakFrequency } from "./StreakFrequency";
export declare const BaseStreakResponse: core.serialization.ObjectSchema<serializers.BaseStreakResponse.Raw, TrophyApi.BaseStreakResponse>;
export declare namespace BaseStreakResponse {
    interface Raw {
        length: number;
        frequency: StreakFrequency.Raw;
        started?: string | null;
        periodStart?: string | null;
        periodEnd?: string | null;
        expires?: string | null;
        freezes?: number | null;
        maxFreezes?: number | null;
        freezeAutoEarnInterval?: number | null;
        freezeAutoEarnAmount?: number | null;
    }
}
