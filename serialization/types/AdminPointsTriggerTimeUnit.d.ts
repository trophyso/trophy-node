import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const AdminPointsTriggerTimeUnit: core.serialization.Schema<serializers.AdminPointsTriggerTimeUnit.Raw, TrophyApi.AdminPointsTriggerTimeUnit>;
export declare namespace AdminPointsTriggerTimeUnit {
    type Raw = "hours" | "days";
}
