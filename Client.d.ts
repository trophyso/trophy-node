/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as environments from "./environments";
import * as core from "./core";
import { Achievements } from "./api/resources/achievements/client/Client";
import { Metrics } from "./api/resources/metrics/client/Client";
import { Users } from "./api/resources/users/client/Client";
export declare namespace TrophyApiClient {
    interface Options {
        environment?: core.Supplier<environments.TrophyApiEnvironment | string>;
        apiKey: core.Supplier<string>;
    }
    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}
export declare class TrophyApiClient {
    protected readonly _options: TrophyApiClient.Options;
    constructor(_options: TrophyApiClient.Options);
    protected _achievements: Achievements | undefined;
    get achievements(): Achievements;
    protected _metrics: Metrics | undefined;
    get metrics(): Metrics;
    protected _users: Users | undefined;
    get users(): Users;
}
