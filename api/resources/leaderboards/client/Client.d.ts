import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient";
import * as core from "../../../../core";
import * as TrophyApi from "../../../index";
export declare namespace LeaderboardsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class LeaderboardsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<LeaderboardsClient.Options>;
    constructor(options: LeaderboardsClient.Options);
    /**
     * Get all leaderboards for your organization. Finished leaderboards are excluded by default.
     *
     * @param {TrophyApi.LeaderboardsAllRequest} request
     * @param {LeaderboardsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.leaderboards.all({
     *         includeFinished: true
     *     })
     */
    all(request?: TrophyApi.LeaderboardsAllRequest, requestOptions?: LeaderboardsClient.RequestOptions): core.HttpResponsePromise<TrophyApi.LeaderboardsAllResponseItem[]>;
    private __all;
    /**
     * Get a specific leaderboard by its key.
     *
     * @param {string} key - Unique key of the leaderboard as set when created.
     * @param {TrophyApi.LeaderboardsGetRequest} request
     * @param {LeaderboardsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.NotFoundError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.leaderboards.get("weekly-words", {
     *         offset: 1,
     *         limit: 1,
     *         run: "2025-01-15",
     *         userId: "user-123",
     *         userAttributes: "city:London"
     *     })
     */
    get(key: string, request?: TrophyApi.LeaderboardsGetRequest, requestOptions?: LeaderboardsClient.RequestOptions): core.HttpResponsePromise<TrophyApi.LeaderboardResponseWithRankings>;
    private __get;
}
