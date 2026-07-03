import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../../../BaseClient";
import { type NormalizedClientOptionsWithAuth } from "../../../../../../../../BaseClient";
import * as core from "../../../../../../../../core";
import * as TrophyApi from "../../../../../../../index";
export declare namespace LevelsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class LevelsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<LevelsClient.Options>;
    constructor(options: LevelsClient.Options);
    /**
     * List points levels for a system.
     *
     * @param {string} systemId - The UUID of the points system.
     * @param {TrophyApi.admin.points.LevelsListRequest} request
     * @param {LevelsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.NotFoundError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.admin.points.levels.list("550e8400-e29b-41d4-a716-446655440000", {
     *         limit: 1,
     *         skip: 1
     *     })
     */
    list(systemId: string, request?: TrophyApi.admin.points.LevelsListRequest, requestOptions?: LevelsClient.RequestOptions): core.HttpResponsePromise<TrophyApi.ListPointsLevelsResponse>;
    private __list;
    /**
     * Create points levels. Maximum 100 levels per request.
     *
     * @param {string} systemId - The UUID of the points system.
     * @param {TrophyApi.CreatePointsLevelsRequest} request
     * @param {LevelsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.NotFoundError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.admin.points.levels.create("550e8400-e29b-41d4-a716-446655440000", [{
     *             name: "Bronze",
     *             key: "bronze",
     *             points: 100
     *         }])
     */
    create(systemId: string, request: TrophyApi.CreatePointsLevelsRequest, requestOptions?: LevelsClient.RequestOptions): core.HttpResponsePromise<TrophyApi.CreatePointsLevelsResponse>;
    private __create;
    /**
     * Delete multiple points levels by ID.
     *
     * @param {string} systemId - The UUID of the points system.
     * @param {TrophyApi.admin.points.LevelsDeleteRequest} request
     * @param {LevelsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.NotFoundError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.admin.points.levels.delete("550e8400-e29b-41d4-a716-446655440000", {
     *         ids: ["ids"]
     *     })
     */
    delete(systemId: string, request?: TrophyApi.admin.points.LevelsDeleteRequest, requestOptions?: LevelsClient.RequestOptions): core.HttpResponsePromise<TrophyApi.DeletePointsLevelsResponse>;
    private __delete;
    /**
     * Update multiple points levels. Each item must include an ID. `key` cannot be changed.
     *
     * @param {string} systemId - The UUID of the points system.
     * @param {TrophyApi.PatchPointsLevelsRequest} request
     * @param {LevelsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.NotFoundError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.admin.points.levels.update("550e8400-e29b-41d4-a716-446655440000", [{
     *             id: "550e8400-e29b-41d4-a716-446655440000"
     *         }])
     */
    update(systemId: string, request: TrophyApi.PatchPointsLevelsRequest, requestOptions?: LevelsClient.RequestOptions): core.HttpResponsePromise<TrophyApi.PatchPointsLevelsResponse>;
    private __update;
    /**
     * Get a single points level by ID.
     *
     * @param {string} systemId - The UUID of the points system.
     * @param {string} id - The UUID of the points level.
     * @param {LevelsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.NotFoundError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.admin.points.levels.get("550e8400-e29b-41d4-a716-446655440000", "660f9500-f30c-42e5-b827-557766550001")
     */
    get(systemId: string, id: string, requestOptions?: LevelsClient.RequestOptions): core.HttpResponsePromise<TrophyApi.AdminPointsLevel>;
    private __get;
}
