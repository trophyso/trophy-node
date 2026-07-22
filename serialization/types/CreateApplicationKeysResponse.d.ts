import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AdminIssue } from "./AdminIssue";
import { CreatedApplicationKey } from "./CreatedApplicationKey";
export declare const CreateApplicationKeysResponse: core.serialization.ObjectSchema<serializers.CreateApplicationKeysResponse.Raw, TrophyApi.CreateApplicationKeysResponse>;
export declare namespace CreateApplicationKeysResponse {
    interface Raw {
        created: CreatedApplicationKey.Raw[];
        issues: AdminIssue.Raw[];
    }
}
