import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../BaseClient";
import { type NormalizedClientOptionsWithAuth } from "../../../../../../BaseClient";
import * as core from "../../../../../../core";
import * as TrophyApi from "../../../../../index";
export declare namespace EnvironmentsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class EnvironmentsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<EnvironmentsClient.Options>;
    constructor(options: EnvironmentsClient.Options);
    /**
     * List active environments.
     *
     * @param {EnvironmentsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.admin.environments.list()
     */
    list(requestOptions?: EnvironmentsClient.RequestOptions): core.HttpResponsePromise<TrophyApi.ListEnvironmentsResponse>;
    private __list;
}
