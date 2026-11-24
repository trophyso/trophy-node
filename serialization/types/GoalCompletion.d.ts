import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const GoalCompletion: core.serialization.Schema<serializers.GoalCompletion.Raw, TrophyApi.GoalCompletion>;
export declare namespace GoalCompletion {
    type Raw = "manual" | "none" | "metric";
}
