/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as TrophyApi from "../../api";
import * as core from "../../core";
export declare const EventResponse: core.serialization.ObjectSchema<serializers.EventResponse.Raw, TrophyApi.EventResponse>;
export declare namespace EventResponse {
    interface Raw {
        eventId: string;
        metricId: string;
        total: number;
        achievements?: serializers.EventResponseMetricsItem.Raw[] | null;
        currentStreak?: serializers.IncrementMetricStreakResponse.Raw | null;
    }
}
