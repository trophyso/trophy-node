import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient";
import * as core from "../../../../core";
import * as TrophyApi from "../../../index";
export declare namespace PointsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class PointsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<PointsClient.Options>;
    constructor(options: PointsClient.Options);
    /**
     * Get a breakdown of the number of users with points in each range.
     *
     * @param {string} key - Key of the points system.
     * @param {TrophyApi.PointsSummaryRequest} request
     * @param {PointsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.NotFoundError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.points.summary("points-system-key", {
     *         userAttributes: "plan-type:premium,region:us-east"
     *     })
     */
    summary(key: string, request?: TrophyApi.PointsSummaryRequest, requestOptions?: PointsClient.RequestOptions): core.HttpResponsePromise<TrophyApi.PointsSummaryResponse>;
    private __summary;
    /**
     * Get a points system with its triggers.
     *
     * @param {string} key - Key of the points system.
     * @param {PointsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.NotFoundError}
     *
     * @example
     *     await client.points.system("points-system-key")
     */
    system(key: string, requestOptions?: PointsClient.RequestOptions): core.HttpResponsePromise<TrophyApi.PointsSystemResponse>;
    private __system;
    /**
     * Get all global boosts for a points system. Finished boosts are excluded by default.
     *
     * @param {string} key - Key of the points system.
     * @param {TrophyApi.PointsBoostsRequest} request
     * @param {PointsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.NotFoundError}
     *
     * @example
     *     await client.points.boosts("points-system-key", {
     *         includeFinished: true
     *     })
     */
    boosts(key: string, request?: TrophyApi.PointsBoostsRequest, requestOptions?: PointsClient.RequestOptions): core.HttpResponsePromise<TrophyApi.PointsBoost[]>;
    private __boosts;
    /**
     * Get all levels for a points system.
     *
     * @param {string} key - Key of the points system.
     * @param {PointsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.NotFoundError}
     *
     * @example
     *     await client.points.levels("points-system-key")
     */
    levels(key: string, requestOptions?: PointsClient.RequestOptions): core.HttpResponsePromise<TrophyApi.PointsLevel[]>;
    private __levels;
    /**
     * Get a breakdown of the number of users at each level in a points system.
     *
     * @param {string} key - Key of the points system.
     * @param {PointsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.NotFoundError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.points.levelSummary("points-system-key")
     */
    levelSummary(key: string, requestOptions?: PointsClient.RequestOptions): core.HttpResponsePromise<TrophyApi.PointsLevelSummaryResponse>;
    private __levelSummary;
}
