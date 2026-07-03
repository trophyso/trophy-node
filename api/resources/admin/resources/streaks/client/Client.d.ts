import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../BaseClient";
import { type NormalizedClientOptionsWithAuth } from "../../../../../../BaseClient";
import * as core from "../../../../../../core";
import * as TrophyApi from "../../../../../index";
import { FreezesClient } from "../resources/freezes/client/Client";
export declare namespace StreaksClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class StreaksClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<StreaksClient.Options>;
    protected _freezes: FreezesClient | undefined;
    constructor(options: StreaksClient.Options);
    get freezes(): FreezesClient;
    /**
     * Restore streaks for multiple users to the maximum previously achieved streak length found within the current restore window: the last 90 days for daily streaks, weekly periods starting with the week containing the start of the current calendar year for weekly streaks, and monthly periods starting at the beginning of the previous calendar year for monthly streaks.
     *
     * @param {TrophyApi.admin.RestoreStreaksRequest} request
     * @param {StreaksClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.BadRequestError}
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.admin.streaks.restore({
     *         users: [{
     *                 id: "user-123"
     *             }, {
     *                 id: "user-456"
     *             }]
     *     })
     */
    restore(request: TrophyApi.admin.RestoreStreaksRequest, requestOptions?: StreaksClient.RequestOptions): core.HttpResponsePromise<TrophyApi.RestoreStreaksResponse>;
    private __restore;
}
