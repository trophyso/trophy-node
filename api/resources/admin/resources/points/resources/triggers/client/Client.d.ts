import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../../../BaseClient";
import { type NormalizedClientOptionsWithAuth } from "../../../../../../../../BaseClient";
import * as core from "../../../../../../../../core";
import * as TrophyApi from "../../../../../../../index";
export declare namespace TriggersClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class TriggersClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<TriggersClient.Options>;
    constructor(options: TriggersClient.Options);
    /**
     * List points triggers for a system.
     *
     * @param {string} systemId - The UUID of the points system.
     * @param {TrophyApi.admin.points.TriggersListRequest} request
     * @param {TriggersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.NotFoundError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.admin.points.triggers.list("550e8400-e29b-41d4-a716-446655440000", {
     *         limit: 1,
     *         skip: 1
     *     })
     */
    list(systemId: string, request?: TrophyApi.admin.points.TriggersListRequest, requestOptions?: TriggersClient.RequestOptions): core.HttpResponsePromise<TrophyApi.ListPointsTriggersResponse>;
    private __list;
    /**
     * Create points triggers in bulk. Maximum 100 triggers per request.
     *
     * @param {string} systemId - The UUID of the points system.
     * @param {TrophyApi.CreatePointsTriggersRequest} request
     * @param {TriggersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.NotFoundError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.admin.points.triggers.create("550e8400-e29b-41d4-a716-446655440000", [{
     *             type: "metric",
     *             points: 10
     *         }])
     */
    create(systemId: string, request: TrophyApi.CreatePointsTriggersRequest, requestOptions?: TriggersClient.RequestOptions): core.HttpResponsePromise<TrophyApi.CreatePointsTriggersResponse>;
    private __create;
    /**
     * Delete (archive) points triggers by ID. Maximum 100 trigger IDs per request.
     *
     * @param {string} systemId - The UUID of the points system.
     * @param {TrophyApi.admin.points.TriggersDeleteRequest} request
     * @param {TriggersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.NotFoundError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.admin.points.triggers.delete("550e8400-e29b-41d4-a716-446655440000", {
     *         ids: ["550e8400-e29b-41d4-a716-446655440000"]
     *     })
     */
    delete(systemId: string, request?: TrophyApi.admin.points.TriggersDeleteRequest, requestOptions?: TriggersClient.RequestOptions): core.HttpResponsePromise<TrophyApi.DeletePointsTriggersResponse>;
    private __delete;
    /**
     * Update points triggers in bulk. Maximum 100 triggers per request. Only provided fields are updated; omitted fields are preserved.
     *
     * @param {string} systemId - The UUID of the points system.
     * @param {TrophyApi.PatchPointsTriggersRequest} request
     * @param {TriggersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.NotFoundError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.admin.points.triggers.update("550e8400-e29b-41d4-a716-446655440000", [{
     *             id: "id"
     *         }])
     */
    update(systemId: string, request: TrophyApi.PatchPointsTriggersRequest, requestOptions?: TriggersClient.RequestOptions): core.HttpResponsePromise<TrophyApi.PatchPointsTriggersResponse>;
    private __update;
    /**
     * Get a single points trigger by ID.
     *
     * @param {string} systemId - The UUID of the points system.
     * @param {string} id - The UUID of the points trigger.
     * @param {TriggersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.NotFoundError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.admin.points.triggers.get("550e8400-e29b-41d4-a716-446655440000", "660f9500-f30c-42e5-b827-557766550001")
     */
    get(systemId: string, id: string, requestOptions?: TriggersClient.RequestOptions): core.HttpResponsePromise<TrophyApi.AdminPointsTrigger>;
    private __get;
}
