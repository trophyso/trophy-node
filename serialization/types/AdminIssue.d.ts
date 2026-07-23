import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AdminIssueSeverity } from "./AdminIssueSeverity";
export declare const AdminIssue: core.serialization.ObjectSchema<serializers.AdminIssue.Raw, TrophyApi.AdminIssue>;
export declare namespace AdminIssue {
    interface Raw {
        id?: string | null;
        userId?: string | null;
        boostId?: string | null;
        index?: number | null;
        severity: AdminIssueSeverity.Raw;
        message: string;
    }
}
