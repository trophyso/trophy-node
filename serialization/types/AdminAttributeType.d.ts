import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const AdminAttributeType: core.serialization.Schema<serializers.AdminAttributeType.Raw, TrophyApi.AdminAttributeType>;
export declare namespace AdminAttributeType {
    type Raw = "user" | "event";
}
