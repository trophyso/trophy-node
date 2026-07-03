import { AchievementsClient } from "./api/resources/achievements/client/Client";
import { AdminClient } from "./api/resources/admin/client/Client";
import { LeaderboardsClient } from "./api/resources/leaderboards/client/Client";
import { MetricsClient } from "./api/resources/metrics/client/Client";
import { PointsClient } from "./api/resources/points/client/Client";
import { StreaksClient } from "./api/resources/streaks/client/Client";
import { UsersClient } from "./api/resources/users/client/Client";
import type { BaseClientOptions, BaseRequestOptions } from "./BaseClient";
import { type NormalizedClientOptionsWithAuth } from "./BaseClient";
import * as core from "./core";
export declare namespace TrophyApiClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class TrophyApiClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<TrophyApiClient.Options>;
    protected _achievements: AchievementsClient | undefined;
    protected _metrics: MetricsClient | undefined;
    protected _users: UsersClient | undefined;
    protected _streaks: StreaksClient | undefined;
    protected _points: PointsClient | undefined;
    protected _leaderboards: LeaderboardsClient | undefined;
    protected _admin: AdminClient | undefined;
    constructor(options: TrophyApiClient.Options);
    get achievements(): AchievementsClient;
    get metrics(): MetricsClient;
    get users(): UsersClient;
    get streaks(): StreaksClient;
    get points(): PointsClient;
    get leaderboards(): LeaderboardsClient;
    get admin(): AdminClient;
    /**
     * Make a passthrough request using the SDK's configured auth, retry, logging, etc.
     * This is useful for making requests to endpoints not yet supported in the SDK.
     * The input can be a URL string, URL object, or Request object. Relative paths are resolved against the configured base URL.
     *
     * @param {Request | string | URL} input - The URL, path, or Request object.
     * @param {RequestInit} init - Standard fetch RequestInit options.
     * @param {core.PassthroughRequest.RequestOptions} requestOptions - Per-request overrides (timeout, retries, headers, abort signal).
     * @returns {Promise<Response>} A standard Response object.
     */
    fetch(input: Request | string | URL, init?: RequestInit, requestOptions?: core.PassthroughRequest.RequestOptions): Promise<Response>;
}
