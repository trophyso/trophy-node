import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../BaseClient";
import { type NormalizedClientOptionsWithAuth } from "../../../../../../BaseClient";
import * as core from "../../../../../../core";
import * as TrophyApi from "../../../../../index";
export declare namespace SettingsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class SettingsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<SettingsClient.Options>;
    constructor(options: SettingsClient.Options);
    /**
     * Get branding, experimentation, and aggregation settings.
     *
     * @param {SettingsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.admin.settings.get()
     */
    get(requestOptions?: SettingsClient.RequestOptions): core.HttpResponsePromise<TrophyApi.AdminSettings>;
    private __get;
    /**
     * Update branding, experimentation, and aggregation settings.
     *
     * @param {TrophyApi.admin.UpdateAdminSettingsRequest} request
     * @param {SettingsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.admin.settings.update({
     *         branding: {
     *             appName: "Trophy",
     *             appUrl: "https://app.example.com",
     *             brandColor: "#1a2b3c",
     *             logo: {
     *                 url: "https://cdn.example.com/logo.png"
     *             }
     *         },
     *         experimentation: {
     *             controlRatio: 10,
     *             userActivationWindow: 14
     *         },
     *         aggregationPeriod: "weekly"
     *     })
     *
     * @example
     *     await client.admin.settings.update()
     */
    update(request?: TrophyApi.admin.UpdateAdminSettingsRequest, requestOptions?: SettingsClient.RequestOptions): core.HttpResponsePromise<TrophyApi.AdminSettings>;
    private __update;
}
