import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../../../BaseClient";
import { type NormalizedClientOptionsWithAuth } from "../../../../../../../../BaseClient";
import * as core from "../../../../../../../../core";
import * as TrophyApi from "../../../../../../../index";
export declare namespace FreezesClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class FreezesClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<FreezesClient.Options>;
    constructor(options: FreezesClient.Options);
    /**
     * Create streak freezes for multiple users.
     *
     * @param {TrophyApi.admin.streaks.CreateStreakFreezesRequest} request
     * @param {FreezesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.BadRequestError}
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.admin.streaks.freezes.create({
     *         freezes: [{
     *                 userId: "user-123"
     *             }, {
     *                 userId: "user-456"
     *             }, {
     *                 userId: "user-123"
     *             }]
     *     })
     */
    create(request: TrophyApi.admin.streaks.CreateStreakFreezesRequest, requestOptions?: FreezesClient.RequestOptions): core.HttpResponsePromise<TrophyApi.CreateStreakFreezesResponse>;
    private __create;
}
