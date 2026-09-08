import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const AdminStreakFrequency: core.serialization.Schema<serializers.AdminStreakFrequency.Raw, TrophyApi.AdminStreakFrequency>;
export declare namespace AdminStreakFrequency {
    type Raw = "daily" | "weekly" | "monthly";
}
