import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const AdminErrorBody: core.serialization.ObjectSchema<serializers.AdminErrorBody.Raw, TrophyApi.AdminErrorBody>;
export declare namespace AdminErrorBody {
    interface Raw {
        error: string;
    }
}
