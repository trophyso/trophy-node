import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient";
import * as core from "../../../../core";
import * as TrophyApi from "../../../index";
export declare namespace AchievementsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class AchievementsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<AchievementsClient.Options>;
    constructor(options: AchievementsClient.Options);
    /**
     * Get all achievements and their completion stats.
     *
     * @param {TrophyApi.AchievementsAllRequest} request
     * @param {AchievementsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.achievements.all({
     *         userAttributes: "plan-type:premium,region:us-east"
     *     })
     */
    all(request?: TrophyApi.AchievementsAllRequest, requestOptions?: AchievementsClient.RequestOptions): core.HttpResponsePromise<TrophyApi.AchievementWithStatsResponse[]>;
    private __all;
    /**
     * Mark an achievement as completed for a user.
     *
     * @param {string} key - Unique reference of the achievement as set when created.
     * @param {TrophyApi.AchievementsCompleteRequest} request
     * @param {AchievementsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.NotFoundError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.achievements.complete("finish-onboarding", {
     *         user: {
     *             email: "user@example.com",
     *             tz: "Europe/London",
     *             id: "user-id"
     *         }
     *     })
     */
    complete(key: string, request: TrophyApi.AchievementsCompleteRequest, requestOptions?: AchievementsClient.RequestOptions): core.HttpResponsePromise<TrophyApi.AchievementCompletionResponse>;
    private __complete;
}
