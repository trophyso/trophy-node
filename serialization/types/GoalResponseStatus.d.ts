import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const GoalResponseStatus: core.serialization.Schema<serializers.GoalResponseStatus.Raw, TrophyApi.GoalResponseStatus>;
export declare namespace GoalResponseStatus {
    type Raw = "active" | "completed" | "missed" | "ended";
}
