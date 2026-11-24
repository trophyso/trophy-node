import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const GoalStatus: core.serialization.Schema<serializers.GoalStatus.Raw, TrophyApi.GoalStatus>;
export declare namespace GoalStatus {
    type Raw = "active" | "completed" | "missed" | "ended";
}
