import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../BaseClient";
import { type NormalizedClientOptionsWithAuth } from "../../../../../../BaseClient";
import * as core from "../../../../../../core";
import * as TrophyApi from "../../../../../index";
export declare namespace AttributesClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class AttributesClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<AttributesClient.Options>;
    constructor(options: AttributesClient.Options);
    /**
     * List attributes.
     *
     * @param {TrophyApi.admin.AttributesListRequest} request
     * @param {AttributesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.admin.attributes.list({
     *         limit: 1,
     *         skip: 1
     *     })
     */
    list(request?: TrophyApi.admin.AttributesListRequest, requestOptions?: AttributesClient.RequestOptions): core.HttpResponsePromise<TrophyApi.ListAttributesResponse>;
    private __list;
    /**
     * Create attributes.
     *
     * @param {TrophyApi.CreateAttributesRequest} request
     * @param {AttributesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.admin.attributes.create([{
     *             name: "Plan",
     *             key: "plan",
     *             type: "user"
     *         }, {
     *             name: "Device",
     *             key: "device",
     *             type: "event"
     *         }])
     */
    create(request: TrophyApi.CreateAttributesRequest, requestOptions?: AttributesClient.RequestOptions): core.HttpResponsePromise<TrophyApi.CreateAttributesResponse>;
    private __create;
    /**
     * Delete attributes by ID.
     *
     * @param {TrophyApi.admin.AttributesDeleteRequest} request
     * @param {AttributesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.admin.attributes.delete({
     *         ids: ["550e8400-e29b-41d4-a716-446655440000", "550e8400-e29b-41d4-a716-446655440001"]
     *     })
     */
    delete(request?: TrophyApi.admin.AttributesDeleteRequest, requestOptions?: AttributesClient.RequestOptions): core.HttpResponsePromise<TrophyApi.DeleteAttributesResponse>;
    private __delete;
    /**
     * Update attributes by ID.
     *
     * @param {TrophyApi.UpdateAttributesRequest} request
     * @param {AttributesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.admin.attributes.update([{
     *             id: "550e8400-e29b-41d4-a716-446655440000",
     *             name: "Subscription Plan"
     *         }])
     */
    update(request: TrophyApi.UpdateAttributesRequest, requestOptions?: AttributesClient.RequestOptions): core.HttpResponsePromise<TrophyApi.UpdateAttributesResponse>;
    private __update;
    /**
     * Get an attribute by ID.
     *
     * @param {string} id - The UUID of the attribute to retrieve.
     * @param {AttributesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.NotFoundError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.admin.attributes.get("550e8400-e29b-41d4-a716-446655440000")
     */
    get(id: string, requestOptions?: AttributesClient.RequestOptions): core.HttpResponsePromise<TrophyApi.AdminAttribute>;
    private __get;
}
