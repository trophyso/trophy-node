import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../BaseClient";
import { type NormalizedClientOptionsWithAuth } from "../../../../../../BaseClient";
import * as core from "../../../../../../core";
import * as TrophyApi from "../../../../../index";
export declare namespace TenantsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class TenantsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<TenantsClient.Options>;
    constructor(options: TenantsClient.Options);
    /**
     * List tenants in the current environment.
     *
     * @param {TrophyApi.admin.TenantsListRequest} request
     * @param {TenantsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.admin.tenants.list({
     *         limit: 1,
     *         skip: 1
     *     })
     */
    list(request?: TrophyApi.admin.TenantsListRequest, requestOptions?: TenantsClient.RequestOptions): core.HttpResponsePromise<TrophyApi.ListTenantsResponse>;
    private __list;
    /**
     * Create tenants.
     *
     * @param {TrophyApi.CreateTenantsRequest} request
     * @param {TenantsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.admin.tenants.create([{
     *             customerId: "customer_12345",
     *             name: "Acme Corp"
     *         }, {
     *             customerId: "customer_67890",
     *             name: "Globex Inc"
     *         }])
     */
    create(request: TrophyApi.CreateTenantsRequest, requestOptions?: TenantsClient.RequestOptions): core.HttpResponsePromise<TrophyApi.CreateTenantsResponse>;
    private __create;
    /**
     * Delete tenants by ID.
     *
     * @param {TrophyApi.admin.TenantsDeleteRequest} request
     * @param {TenantsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.admin.tenants.delete({
     *         ids: ["550e8400-e29b-41d4-a716-446655440000", "550e8400-e29b-41d4-a716-446655440001"]
     *     })
     */
    delete(request?: TrophyApi.admin.TenantsDeleteRequest, requestOptions?: TenantsClient.RequestOptions): core.HttpResponsePromise<TrophyApi.DeleteTenantsResponse>;
    private __delete;
    /**
     * Update tenants by ID.
     *
     * @param {TrophyApi.UpdateTenantsRequest} request
     * @param {TenantsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.admin.tenants.update([{
     *             id: "550e8400-e29b-41d4-a716-446655440000",
     *             name: "Acme Corporation"
     *         }])
     */
    update(request: TrophyApi.UpdateTenantsRequest, requestOptions?: TenantsClient.RequestOptions): core.HttpResponsePromise<TrophyApi.UpdateTenantsResponse>;
    private __update;
    /**
     * Get a tenant by ID.
     *
     * @param {string} id - The UUID of the tenant to retrieve.
     * @param {TenantsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.NotFoundError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.admin.tenants.get("550e8400-e29b-41d4-a716-446655440000")
     */
    get(id: string, requestOptions?: TenantsClient.RequestOptions): core.HttpResponsePromise<TrophyApi.AdminTenant>;
    private __get;
}
