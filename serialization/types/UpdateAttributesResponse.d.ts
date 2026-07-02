import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AdminAttribute } from "./AdminAttribute";
import { AdminIssue } from "./AdminIssue";
export declare const UpdateAttributesResponse: core.serialization.ObjectSchema<serializers.UpdateAttributesResponse.Raw, TrophyApi.UpdateAttributesResponse>;
export declare namespace UpdateAttributesResponse {
    interface Raw {
        updated: AdminAttribute.Raw[];
        issues: AdminIssue.Raw[];
    }
}
