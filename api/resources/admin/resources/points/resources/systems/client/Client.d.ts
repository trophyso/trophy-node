import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../../../BaseClient";
import { type NormalizedClientOptionsWithAuth } from "../../../../../../../../BaseClient";
import * as core from "../../../../../../../../core";
import * as TrophyApi from "../../../../../../../index";
export declare namespace SystemsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class SystemsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<SystemsClient.Options>;
    constructor(options: SystemsClient.Options);
    /**
     * List points systems.
     *
     * @param {TrophyApi.admin.points.SystemsListRequest} request
     * @param {SystemsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.admin.points.systems.list({
     *         limit: 1,
     *         skip: 1
     *     })
     */
    list(request?: TrophyApi.admin.points.SystemsListRequest, requestOptions?: SystemsClient.RequestOptions): core.HttpResponsePromise<TrophyApi.ListPointsSystemsResponse>;
    private __list;
    /**
     * Create points systems. Optionally include sub-entities (levels, boosts, triggers) in each system payload to create them alongside the system.
     *
     * @param {TrophyApi.CreatePointsSystemsRequest} request
     * @param {SystemsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.admin.points.systems.create([{
     *             name: "XP",
     *             key: "xp",
     *             description: "Experience points",
     *             levels: [{
     *                     name: "Bronze",
     *                     key: "bronze",
     *                     points: 100
     *                 }, {
     *                     name: "Silver",
     *                     key: "silver",
     *                     points: 500
     *                 }]
     *         }])
     */
    create(request: TrophyApi.CreatePointsSystemsRequest, requestOptions?: SystemsClient.RequestOptions): core.HttpResponsePromise<TrophyApi.CreatePointsSystemsResponse>;
    private __create;
    /**
     * Delete (archive) points systems by ID.
     *
     * @param {TrophyApi.admin.points.SystemsDeleteRequest} request
     * @param {SystemsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.admin.points.systems.delete({
     *         ids: ["550e8400-e29b-41d4-a716-446655440000"]
     *     })
     */
    delete(request?: TrophyApi.admin.points.SystemsDeleteRequest, requestOptions?: SystemsClient.RequestOptions): core.HttpResponsePromise<TrophyApi.DeletePointsSystemsResponse>;
    private __delete;
    /**
     * Update points systems by ID.
     *
     * @param {TrophyApi.UpdatePointsSystemsRequest} request
     * @param {SystemsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.admin.points.systems.update([{
     *             id: "550e8400-e29b-41d4-a716-446655440000",
     *             name: "New Name"
     *         }])
     */
    update(request: TrophyApi.UpdatePointsSystemsRequest, requestOptions?: SystemsClient.RequestOptions): core.HttpResponsePromise<TrophyApi.UpdatePointsSystemsResponse>;
    private __update;
    /**
     * Get a points system by ID.
     *
     * @param {string} id - The ID of the points system.
     * @param {SystemsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.NotFoundError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.admin.points.systems.get("550e8400-e29b-41d4-a716-446655440000")
     */
    get(id: string, requestOptions?: SystemsClient.RequestOptions): core.HttpResponsePromise<TrophyApi.AdminPointsSystem>;
    private __get;
}
