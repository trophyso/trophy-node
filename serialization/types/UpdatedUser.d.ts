import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const UpdatedUser: core.serialization.ObjectSchema<serializers.UpdatedUser.Raw, TrophyApi.UpdatedUser>;
export declare namespace UpdatedUser {
    interface Raw {
        email?: string | null;
        name?: string | null;
        tz?: string | null;
        deviceTokens?: string[] | null;
        subscribeToEmails?: boolean | null;
        attributes?: Record<string, string> | null;
    }
}
