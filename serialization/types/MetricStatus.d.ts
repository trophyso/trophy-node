/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as TrophyApi from "../../api";
import * as core from "../../core";
export declare const MetricStatus: core.serialization.Schema<serializers.MetricStatus.Raw, TrophyApi.MetricStatus>;
export declare namespace MetricStatus {
    type Raw = "archived" | "active";
}
