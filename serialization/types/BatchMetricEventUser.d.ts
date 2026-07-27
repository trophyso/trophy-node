import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const BatchMetricEventUser: core.serialization.ObjectSchema<serializers.BatchMetricEventUser.Raw, TrophyApi.BatchMetricEventUser>;
export declare namespace BatchMetricEventUser {
    interface Raw {
        id: string;
        email?: string | null;
        name?: string | null;
        tz?: string | null;
        deviceTokens?: string[] | null;
        subscribeToEmails?: boolean | null;
        attributes?: Record<string, string> | null;
    }
}
