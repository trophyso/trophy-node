import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const AdminStreakEvaluationMode: core.serialization.Schema<serializers.AdminStreakEvaluationMode.Raw, TrophyApi.AdminStreakEvaluationMode>;
export declare namespace AdminStreakEvaluationMode {
    type Raw = "OR" | "AND";
}
