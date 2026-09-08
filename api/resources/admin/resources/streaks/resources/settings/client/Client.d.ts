import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../../../BaseClient";
import { type NormalizedClientOptionsWithAuth } from "../../../../../../../../BaseClient";
import * as core from "../../../../../../../../core";
import * as TrophyApi from "../../../../../../../index";
export declare namespace SettingsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class SettingsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<SettingsClient.Options>;
    constructor(options: SettingsClient.Options);
    /**
     * Get the organization's streak configuration.
     *
     * @param {SettingsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.admin.streaks.settings.get()
     */
    get(requestOptions?: SettingsClient.RequestOptions): core.HttpResponsePromise<TrophyApi.StreakSettings>;
    private __get;
    /**
     * Update the organization's streak configuration.
     *
     * @param {TrophyApi.admin.streaks.UpdateStreakSettingsRequest} request
     * @param {SettingsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.admin.streaks.settings.update({
     *         frequency: "daily",
     *         evaluationMode: "OR",
     *         customizationEnabled: true,
     *         daysOff: [0, 6],
     *         metrics: [{
     *                 key: "words-written",
     *                 threshold: 500
     *             }],
     *         freezes: {
     *             startCount: 1,
     *             maxCount: 2,
     *             autoEarnInterval: 7,
     *             autoEarnAmount: 1
     *         }
     *     })
     *
     * @example
     *     await client.admin.streaks.settings.update()
     */
    update(request?: TrophyApi.admin.streaks.UpdateStreakSettingsRequest, requestOptions?: SettingsClient.RequestOptions): core.HttpResponsePromise<TrophyApi.StreakSettings>;
    private __update;
}
