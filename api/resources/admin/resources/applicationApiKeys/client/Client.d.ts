import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../BaseClient";
import { type NormalizedClientOptionsWithAuth } from "../../../../../../BaseClient";
import * as core from "../../../../../../core";
import * as TrophyApi from "../../../../../index";
export declare namespace ApplicationApiKeysClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class ApplicationApiKeysClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<ApplicationApiKeysClient.Options>;
    constructor(options: ApplicationApiKeysClient.Options);
    /**
     * Create application API keys scoped to specific users. Each key can only perform operations on behalf of the user it was created for.
     *
     * @param {TrophyApi.CreateApplicationKeysRequest} request
     * @param {ApplicationApiKeysClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.ForbiddenError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.admin.applicationApiKeys.create([{
     *             userId: "user_123"
     *         }, {
     *             userId: "user_456"
     *         }])
     */
    create(request: TrophyApi.CreateApplicationKeysRequest, requestOptions?: ApplicationApiKeysClient.RequestOptions): core.HttpResponsePromise<TrophyApi.CreateApplicationKeysResponse>;
    private __create;
    /**
     * Delete application API keys by ID.
     *
     * @param {TrophyApi.admin.ApplicationApiKeysDeleteRequest} request
     * @param {ApplicationApiKeysClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.ForbiddenError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.admin.applicationApiKeys.delete({
     *         ids: ["550e8400-e29b-41d4-a716-446655440000"]
     *     })
     */
    delete(request?: TrophyApi.admin.ApplicationApiKeysDeleteRequest, requestOptions?: ApplicationApiKeysClient.RequestOptions): core.HttpResponsePromise<TrophyApi.DeleteApplicationKeysResponse>;
    private __delete;
}
