import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../../../BaseClient";
import { type NormalizedClientOptionsWithAuth } from "../../../../../../../../BaseClient";
import * as core from "../../../../../../../../core";
import * as TrophyApi from "../../../../../../../index";
export declare namespace BoostsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class BoostsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<BoostsClient.Options>;
    constructor(options: BoostsClient.Options);
    /**
     * List points boosts for a system.
     *
     * @param {string} systemId - The UUID of the points system.
     * @param {TrophyApi.admin.points.BoostsListRequest} request
     * @param {BoostsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.NotFoundError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.admin.points.boosts.list("550e8400-e29b-41d4-a716-446655440000", {
     *         limit: 1,
     *         skip: 1
     *     })
     */
    list(systemId: string, request?: TrophyApi.admin.points.BoostsListRequest, requestOptions?: BoostsClient.RequestOptions): core.HttpResponsePromise<TrophyApi.ListPointsBoostsResponse>;
    private __list;
    /**
     * Create points boosts.
     *
     * @param {string} systemId - The UUID of the points system.
     * @param {TrophyApi.CreatePointsBoostsRequest} request
     * @param {BoostsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.NotFoundError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.admin.points.boosts.create("550e8400-e29b-41d4-a716-446655440000", [{
     *             userId: "user-123",
     *             name: "Double XP Weekend",
     *             start: "2024-01-01",
     *             end: "2024-01-03",
     *             multiplier: 2
     *         }])
     *
     * @example
     *     await client.admin.points.boosts.create("550e8400-e29b-41d4-a716-446655440000", [{
     *             name: "Global Holiday Bonus",
     *             start: "2024-12-25",
     *             multiplier: 1.5,
     *             rounding: "up"
     *         }])
     *
     * @example
     *     await client.admin.points.boosts.create("550e8400-e29b-41d4-a716-446655440000", [{
     *             name: "Premium User Boost",
     *             start: "2024-01-01",
     *             multiplier: 2,
     *             userAttributes: [{
     *                     attributeId: "550e8400-e29b-41d4-a716-446655440000",
     *                     attributeValue: "premium"
     *                 }]
     *         }])
     */
    create(systemId: string, request: TrophyApi.CreatePointsBoostsRequest, requestOptions?: BoostsClient.RequestOptions): core.HttpResponsePromise<TrophyApi.CreatePointsBoostsResponse>;
    private __create;
    /**
     * Delete multiple points boosts by ID.
     *
     * @param {string} systemId - The UUID of the points system.
     * @param {TrophyApi.admin.points.BoostsDeleteRequest} request
     * @param {BoostsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.NotFoundError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.admin.points.boosts.delete("550e8400-e29b-41d4-a716-446655440000", {
     *         ids: ["ids"]
     *     })
     */
    delete(systemId: string, request?: TrophyApi.admin.points.BoostsDeleteRequest, requestOptions?: BoostsClient.RequestOptions): core.HttpResponsePromise<TrophyApi.DeletePointsBoostsResponse>;
    private __delete;
    /**
     * Update multiple points boosts.
     *
     * @param {string} systemId - The UUID of the points system.
     * @param {TrophyApi.PatchPointsBoostsRequest} request
     * @param {BoostsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.NotFoundError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.admin.points.boosts.update("550e8400-e29b-41d4-a716-446655440000", [{
     *             id: "550e8400-e29b-41d4-a716-446655440000",
     *             name: "Updated Boost Name",
     *             multiplier: 3
     *         }])
     */
    update(systemId: string, request: TrophyApi.PatchPointsBoostsRequest, requestOptions?: BoostsClient.RequestOptions): core.HttpResponsePromise<TrophyApi.PatchPointsBoostsResponse>;
    private __update;
    /**
     * Get a single points boost by ID.
     *
     * @param {string} systemId - The UUID of the points system.
     * @param {string} id - The UUID of the points boost.
     * @param {BoostsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.NotFoundError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.admin.points.boosts.get("550e8400-e29b-41d4-a716-446655440000", "660f9500-f30c-42e5-b827-557766550001")
     */
    get(systemId: string, id: string, requestOptions?: BoostsClient.RequestOptions): core.HttpResponsePromise<TrophyApi.AdminPointsBoost>;
    private __get;
}
