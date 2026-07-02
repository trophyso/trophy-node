import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient";
import * as core from "../../../../core";
import * as TrophyApi from "../../../index";
export declare namespace StreaksClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class StreaksClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<StreaksClient.Options>;
    constructor(options: StreaksClient.Options);
    /**
     * Get the streak lengths of a list of users, ranked by streak length from longest to shortest.
     *
     * @param {TrophyApi.StreaksListRequest} request
     * @param {StreaksClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.streaks.list({
     *         userIds: ["userIds"]
     *     })
     */
    list(request?: TrophyApi.StreaksListRequest, requestOptions?: StreaksClient.RequestOptions): core.HttpResponsePromise<TrophyApi.BulkStreakResponse>;
    private __list;
}
