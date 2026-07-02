import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../BaseClient";
import { type NormalizedClientOptionsWithAuth } from "../../../../../../BaseClient";
import * as core from "../../../../../../core";
import * as TrophyApi from "../../../../../index";
export declare namespace MetricsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class MetricsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<MetricsClient.Options>;
    constructor(options: MetricsClient.Options);
    /**
     * List metrics.
     *
     * @param {TrophyApi.admin.MetricsListRequest} request
     * @param {MetricsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.admin.metrics.list({
     *         limit: 1,
     *         skip: 1
     *     })
     */
    list(request?: TrophyApi.admin.MetricsListRequest, requestOptions?: MetricsClient.RequestOptions): core.HttpResponsePromise<TrophyApi.ListMetricsResponse>;
    private __list;
    /**
     * Create metrics.
     *
     * @param {TrophyApi.CreateMetricsRequest} request
     * @param {MetricsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.admin.metrics.create([{
     *             name: "Invites Sent",
     *             key: "invites-sent"
     *         }, {
     *             name: "Revenue",
     *             key: "revenue",
     *             unitType: "currency",
     *             units: "USD"
     *         }])
     */
    create(request: TrophyApi.CreateMetricsRequest, requestOptions?: MetricsClient.RequestOptions): core.HttpResponsePromise<TrophyApi.CreateMetricsResponse>;
    private __create;
    /**
     * Delete metrics by ID.
     *
     * @param {TrophyApi.admin.MetricsDeleteRequest} request
     * @param {MetricsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.admin.metrics.delete({
     *         ids: ["550e8400-e29b-41d4-a716-446655440000", "550e8400-e29b-41d4-a716-446655440001"]
     *     })
     */
    delete(request?: TrophyApi.admin.MetricsDeleteRequest, requestOptions?: MetricsClient.RequestOptions): core.HttpResponsePromise<TrophyApi.DeleteMetricsResponse>;
    private __delete;
    /**
     * Update metrics by ID.
     *
     * @param {TrophyApi.UpdateMetricsRequest} request
     * @param {MetricsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.admin.metrics.update([{
     *             id: "550e8400-e29b-41d4-a716-446655440000",
     *             name: "Invites Completed",
     *             units: "invites"
     *         }, {
     *             id: "550e8400-e29b-41d4-a716-446655440001",
     *             unitType: "number",
     *             units: "dollars"
     *         }])
     */
    update(request: TrophyApi.UpdateMetricsRequest, requestOptions?: MetricsClient.RequestOptions): core.HttpResponsePromise<TrophyApi.UpdateMetricsResponse>;
    private __update;
    /**
     * Get a metric by ID.
     *
     * @param {string} id - The UUID of the metric to retrieve.
     * @param {MetricsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.NotFoundError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.admin.metrics.get("550e8400-e29b-41d4-a716-446655440000")
     */
    get(id: string, requestOptions?: MetricsClient.RequestOptions): core.HttpResponsePromise<TrophyApi.CreatedMetric>;
    private __get;
}
