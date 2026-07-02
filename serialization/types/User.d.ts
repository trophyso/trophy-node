import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const User: core.serialization.ObjectSchema<serializers.User.Raw, TrophyApi.User>;
export declare namespace User {
    interface Raw {
        id: string;
        email?: string | null;
        name?: string | null;
        tz?: string | null;
        deviceTokens?: string[] | null;
        subscribeToEmails: boolean;
        attributes: Record<string, string>;
        control: boolean;
        created: string;
        updated: string;
    }
}
