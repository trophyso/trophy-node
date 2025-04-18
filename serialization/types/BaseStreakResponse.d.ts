/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as TrophyApi from "../../api";
import * as core from "../../core";
export declare const BaseStreakResponse: core.serialization.ObjectSchema<serializers.BaseStreakResponse.Raw, TrophyApi.BaseStreakResponse>;
export declare namespace BaseStreakResponse {
    interface Raw {
        length: number;
        frequency: serializers.StreakFrequency.Raw;
        started?: string | null;
        periodStart?: string | null;
        periodEnd?: string | null;
        expires?: string | null;
    }
}
