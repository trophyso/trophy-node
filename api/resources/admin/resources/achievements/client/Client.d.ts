import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../BaseClient";
import { type NormalizedClientOptionsWithAuth } from "../../../../../../BaseClient";
import * as core from "../../../../../../core";
import * as TrophyApi from "../../../../../index";
export declare namespace AchievementsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class AchievementsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<AchievementsClient.Options>;
    constructor(options: AchievementsClient.Options);
    /**
     * List achievements.
     *
     * @param {TrophyApi.admin.AchievementsListRequest} request
     * @param {AchievementsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.admin.achievements.list({
     *         limit: 1,
     *         skip: 1
     *     })
     */
    list(request?: TrophyApi.admin.AchievementsListRequest, requestOptions?: AchievementsClient.RequestOptions): core.HttpResponsePromise<TrophyApi.ListAchievementsResponse>;
    private __list;
    /**
     * Create achievements. Trigger-specific fields are required based on `trigger`.
     *
     * @param {TrophyApi.CreateAchievementsRequest} request
     * @param {AchievementsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.admin.achievements.create([{
     *             name: "First Workout",
     *             trigger: "metric",
     *             metricId: "660f9500-f30c-42e5-b827-557766550001",
     *             metricValue: 1
     *         }, {
     *             name: "Custom Unlock",
     *             trigger: "api",
     *             key: "custom-unlock"
     *         }])
     */
    create(request: TrophyApi.CreateAchievementsRequest, requestOptions?: AchievementsClient.RequestOptions): core.HttpResponsePromise<TrophyApi.CreateAchievementsResponse>;
    private __create;
    /**
     * Delete achievements by ID.
     *
     * @param {TrophyApi.admin.AchievementsDeleteRequest} request
     * @param {AchievementsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.admin.achievements.delete({
     *         ids: ["550e8400-e29b-41d4-a716-446655440000", "550e8400-e29b-41d4-a716-446655440001"]
     *     })
     */
    delete(request?: TrophyApi.admin.AchievementsDeleteRequest, requestOptions?: AchievementsClient.RequestOptions): core.HttpResponsePromise<TrophyApi.DeleteAchievementsResponse>;
    private __delete;
    /**
     * Update achievements by ID. Maximum 100 achievements per request. Only provided fields are updated; omitted fields are preserved.
     *
     * @param {TrophyApi.UpdateAchievementsRequest} request
     * @param {AchievementsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.admin.achievements.update([{
     *             id: "550e8400-e29b-41d4-a716-446655440000",
     *             name: "First Workout Completed",
     *             status: "active"
     *         }])
     */
    update(request: TrophyApi.UpdateAchievementsRequest, requestOptions?: AchievementsClient.RequestOptions): core.HttpResponsePromise<TrophyApi.UpdateAchievementsResponse>;
    private __update;
    /**
     * Get an achievement by ID.
     *
     * @param {string} id - The UUID of the achievement to retrieve.
     * @param {AchievementsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.NotFoundError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.admin.achievements.get("550e8400-e29b-41d4-a716-446655440000")
     */
    get(id: string, requestOptions?: AchievementsClient.RequestOptions): core.HttpResponsePromise<TrophyApi.AdminAchievement>;
    private __get;
}
