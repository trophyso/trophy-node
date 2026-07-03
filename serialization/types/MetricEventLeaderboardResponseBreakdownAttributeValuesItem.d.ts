import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const MetricEventLeaderboardResponseBreakdownAttributeValuesItem: core.serialization.ObjectSchema<serializers.MetricEventLeaderboardResponseBreakdownAttributeValuesItem.Raw, TrophyApi.MetricEventLeaderboardResponseBreakdownAttributeValuesItem>;
export declare namespace MetricEventLeaderboardResponseBreakdownAttributeValuesItem {
    interface Raw {
        key: string;
        value: string;
    }
}
