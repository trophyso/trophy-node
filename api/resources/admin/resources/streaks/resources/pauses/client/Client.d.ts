import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../../../BaseClient";
import { type NormalizedClientOptionsWithAuth } from "../../../../../../../../BaseClient";
import * as core from "../../../../../../../../core";
import * as TrophyApi from "../../../../../../../index";
export declare namespace PausesClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class PausesClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<PausesClient.Options>;
    constructor(options: PausesClient.Options);
    /**
     * Create streak pauses for multiple users. A pause covers a specific date range and maintains the user's streak length during that range instead of ending the streak.
     *
     * @param {TrophyApi.admin.streaks.CreateStreakPausesRequest} request
     * @param {PausesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.admin.streaks.pauses.create({
     *         pauses: [{
     *                 userId: "user-123",
     *                 start: "2026-08-20",
     *                 end: "2026-08-27"
     *             }, {
     *                 userId: "user-456",
     *                 start: "2026-09-01",
     *                 end: "2026-09-07"
     *             }]
     *     })
     */
    create(request: TrophyApi.admin.streaks.CreateStreakPausesRequest, requestOptions?: PausesClient.RequestOptions): core.HttpResponsePromise<TrophyApi.CreateStreakPausesResponse>;
    private __create;
    /**
     * Archive a streak pause by ID. The pause record is not deleted; its status is set to archived so it no longer applies to streak logic.
     *
     * @param {string} id - The UUID of the streak pause to archive.
     * @param {PausesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.NotFoundError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.admin.streaks.pauses.delete("550e8400-e29b-41d4-a716-446655440000")
     */
    delete(id: string, requestOptions?: PausesClient.RequestOptions): core.HttpResponsePromise<TrophyApi.DeleteStreakPausesResponse>;
    private __delete;
}
