import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const AdminEnvironment: core.serialization.ObjectSchema<serializers.AdminEnvironment.Raw, TrophyApi.AdminEnvironment>;
export declare namespace AdminEnvironment {
    interface Raw {
        name: string;
        key: string;
        priority: number;
    }
}
