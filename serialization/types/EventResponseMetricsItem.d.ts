/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as TrophyApi from "../../api";
import * as core from "../../core";
export declare const EventResponseMetricsItem: core.serialization.ObjectSchema<serializers.EventResponseMetricsItem.Raw, TrophyApi.EventResponseMetricsItem>;
export declare namespace EventResponseMetricsItem {
    interface Raw {
        metricId?: string | null;
        completed?: serializers.MultiStageAchievementResponse.Raw[] | null;
    }
}
