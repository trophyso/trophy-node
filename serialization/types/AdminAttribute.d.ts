import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AdminAttributeType } from "./AdminAttributeType";
export declare const AdminAttribute: core.serialization.ObjectSchema<serializers.AdminAttribute.Raw, TrophyApi.AdminAttribute>;
export declare namespace AdminAttribute {
    interface Raw {
        id: string;
        name: string;
        key: string;
        type: AdminAttributeType.Raw;
    }
}
