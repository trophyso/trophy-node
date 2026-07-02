import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../BaseClient";
import { type NormalizedClientOptionsWithAuth } from "../../../../../../BaseClient";
import * as core from "../../../../../../core";
import * as TrophyApi from "../../../../../index";
export declare namespace LeaderboardsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class LeaderboardsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<LeaderboardsClient.Options>;
    constructor(options: LeaderboardsClient.Options);
    /**
     * List leaderboards.
     *
     * @param {TrophyApi.admin.LeaderboardsListRequest} request
     * @param {LeaderboardsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.admin.leaderboards.list({
     *         limit: 1,
     *         skip: 1
     *     })
     */
    list(request?: TrophyApi.admin.LeaderboardsListRequest, requestOptions?: LeaderboardsClient.RequestOptions): core.HttpResponsePromise<TrophyApi.ListLeaderboardsResponse>;
    private __list;
    /**
     * Create leaderboards. Maximum 100 leaderboards per request.
     *
     * @param {TrophyApi.CreateLeaderboardsRequest} request
     * @param {LeaderboardsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.admin.leaderboards.create([{
     *             name: "Revenue Champions",
     *             key: "revenue-champions",
     *             status: "inactive",
     *             rankBy: "metric",
     *             metricId: "550e8400-e29b-41d4-a716-446655440000",
     *             maxParticipants: 100,
     *             start: "2026-04-20",
     *             breakdownAttributes: ["550e8400-e29b-41d4-a716-446655440010"],
     *             runUnit: "month",
     *             runInterval: 1
     *         }, {
     *             name: "Streak Legends",
     *             key: "streak-legends",
     *             status: "scheduled",
     *             rankBy: "streak",
     *             start: "2026-04-27"
     *         }])
     */
    create(request: TrophyApi.CreateLeaderboardsRequest, requestOptions?: LeaderboardsClient.RequestOptions): core.HttpResponsePromise<TrophyApi.CreateLeaderboardsResponse>;
    private __create;
    /**
     * Delete leaderboards by ID.
     *
     * @param {TrophyApi.admin.LeaderboardsDeleteRequest} request
     * @param {LeaderboardsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.admin.leaderboards.delete({
     *         ids: ["ids"]
     *     })
     */
    delete(request?: TrophyApi.admin.LeaderboardsDeleteRequest, requestOptions?: LeaderboardsClient.RequestOptions): core.HttpResponsePromise<TrophyApi.DeleteLeaderboardsResponse>;
    private __delete;
    /**
     * Update leaderboards by ID. Updating `status` behaves the same as activating, scheduling, deactivating, or finishing a leaderboard in the dashboard.
     *
     * @param {TrophyApi.UpdateLeaderboardsRequest} request
     * @param {LeaderboardsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.admin.leaderboards.update([{
     *             id: "550e8400-e29b-41d4-a716-446655440100",
     *             name: "Monthly Revenue Champions",
     *             description: "Ranked by monthly revenue",
     *             status: "active"
     *         }, {
     *             id: "550e8400-e29b-41d4-a716-446655440101",
     *             status: "finished"
     *         }])
     */
    update(request: TrophyApi.UpdateLeaderboardsRequest, requestOptions?: LeaderboardsClient.RequestOptions): core.HttpResponsePromise<TrophyApi.UpdateLeaderboardsResponse>;
    private __update;
    /**
     * Get a leaderboard by ID.
     *
     * @param {string} id - The UUID of the leaderboard to retrieve.
     * @param {LeaderboardsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.NotFoundError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.admin.leaderboards.get("550e8400-e29b-41d4-a716-446655440100")
     */
    get(id: string, requestOptions?: LeaderboardsClient.RequestOptions): core.HttpResponsePromise<TrophyApi.AdminLeaderboard>;
    private __get;
}
