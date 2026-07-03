import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AdminAttribute } from "./AdminAttribute";
import { AdminIssue } from "./AdminIssue";
export declare const CreateAttributesResponse: core.serialization.ObjectSchema<serializers.CreateAttributesResponse.Raw, TrophyApi.CreateAttributesResponse>;
export declare namespace CreateAttributesResponse {
    interface Raw {
        created: AdminAttribute.Raw[];
        issues: AdminIssue.Raw[];
    }
}
