import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient";
import * as core from "../../../../core";
import * as TrophyApi from "../../../index";
export declare namespace UsersClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class UsersClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<UsersClient.Options>;
    constructor(options: UsersClient.Options);
    /**
     * Create a new user.
     *
     * @param {TrophyApi.UpsertedUser} request
     * @param {UsersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.BadRequestError}
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.users.create({
     *         id: "user-id"
     *     })
     */
    create(request: TrophyApi.UpsertedUser, requestOptions?: UsersClient.RequestOptions): core.HttpResponsePromise<TrophyApi.User>;
    private __create;
    /**
     * Get a single user.
     *
     * @param {string} id - ID of the user to get.
     * @param {UsersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.BadRequestError}
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.users.get("userId")
     */
    get(id: string, requestOptions?: UsersClient.RequestOptions): core.HttpResponsePromise<TrophyApi.User>;
    private __get;
    /**
     * Identify a user.
     *
     * @param {string} id - ID of the user to identify.
     * @param {TrophyApi.UpdatedUser} request
     * @param {UsersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.BadRequestError}
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.users.identify("id", {
     *         email: "user@example.com",
     *         tz: "Europe/London",
     *         attributes: {
     *             "department": "engineering",
     *             "role": "developer"
     *         }
     *     })
     */
    identify(id: string, request: TrophyApi.UpdatedUser, requestOptions?: UsersClient.RequestOptions): core.HttpResponsePromise<TrophyApi.User>;
    private __identify;
    /**
     * Update a user.
     *
     * @param {string} id - ID of the user to update.
     * @param {TrophyApi.UpdatedUser} request
     * @param {UsersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.BadRequestError}
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.NotFoundError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.users.update("id", {
     *         email: "user@example.com",
     *         tz: "Europe/London",
     *         attributes: {
     *             "department": "engineering",
     *             "role": "developer"
     *         }
     *     })
     */
    update(id: string, request: TrophyApi.UpdatedUser, requestOptions?: UsersClient.RequestOptions): core.HttpResponsePromise<TrophyApi.User>;
    private __update;
    /**
     * Get a user's notification preferences.
     *
     * @param {string} id - The user's ID in your database.
     * @param {UsersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.NotFoundError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.users.getPreferences("user-123")
     */
    getPreferences(id: string, requestOptions?: UsersClient.RequestOptions): core.HttpResponsePromise<TrophyApi.UserPreferencesResponse>;
    private __getPreferences;
    /**
     * Update a user's notification and streak preferences. Streak preferences require streak customization to be enabled in your Trophy dashboard settings.
     *
     * @param {string} id - The user's ID in your database.
     * @param {TrophyApi.UpdateUserPreferencesRequest} request
     * @param {UsersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.ForbiddenError}
     * @throws {@link TrophyApi.NotFoundError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.users.updatePreferences("user-123", {
     *         notifications: {
     *             streakReminder: ["email"]
     *         }
     *     })
     *
     * @example
     *     await client.users.updatePreferences("user-123", {
     *         notifications: {
     *             recap: ["email"]
     *         }
     *     })
     *
     * @example
     *     await client.users.updatePreferences("user-123", {
     *         notifications: {
     *             achievementCompleted: ["email", "push"]
     *         }
     *     })
     *
     * @example
     *     await client.users.updatePreferences("user-123", {
     *         streak: {
     *             evaluationMode: "OR",
     *             metrics: [{
     *                     key: "words-written",
     *                     threshold: 500
     *                 }]
     *         }
     *     })
     */
    updatePreferences(id: string, request?: TrophyApi.UpdateUserPreferencesRequest, requestOptions?: UsersClient.RequestOptions): core.HttpResponsePromise<TrophyApi.UserPreferencesResponse>;
    private __updatePreferences;
    /**
     * Get a single user's progress against all active metrics.
     *
     * @param {string} id - ID of the user
     * @param {UsersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.NotFoundError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.users.allMetrics("userId")
     */
    allMetrics(id: string, requestOptions?: UsersClient.RequestOptions): core.HttpResponsePromise<TrophyApi.MetricResponse[]>;
    private __allMetrics;
    /**
     * Get a user's progress against a single active metric.
     *
     * @param {string} id - ID of the user.
     * @param {string} key - Unique key of the metric.
     * @param {UsersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.NotFoundError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.users.singleMetric("userId", "key")
     */
    singleMetric(id: string, key: string, requestOptions?: UsersClient.RequestOptions): core.HttpResponsePromise<TrophyApi.MetricResponse>;
    private __singleMetric;
    /**
     * Get a summary of metric events over time for a user.
     *
     * @param {string} id - ID of the user.
     * @param {string} key - Unique key of the metric.
     * @param {TrophyApi.UsersMetricEventSummaryRequest} request
     * @param {UsersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.NotFoundError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.users.metricEventSummary("userId", "words-written", {
     *         aggregation: "daily",
     *         startDate: "2024-01-01",
     *         endDate: "2024-01-31"
     *     })
     */
    metricEventSummary(id: string, key: string, request: TrophyApi.UsersMetricEventSummaryRequest, requestOptions?: UsersClient.RequestOptions): core.HttpResponsePromise<TrophyApi.UsersMetricEventSummaryResponseItem[]>;
    private __metricEventSummary;
    /**
     * Get a user's achievements.
     *
     * @param {string} id - ID of the user.
     * @param {TrophyApi.UsersAchievementsRequest} request
     * @param {UsersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.NotFoundError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.users.achievements("userId", {
     *         includeIncomplete: "true"
     *     })
     */
    achievements(id: string, request?: TrophyApi.UsersAchievementsRequest, requestOptions?: UsersClient.RequestOptions): core.HttpResponsePromise<TrophyApi.UserAchievementWithStatsResponse[]>;
    private __achievements;
    /**
     * Get a user's streak data.
     *
     * @param {string} id - ID of the user.
     * @param {TrophyApi.UsersStreakRequest} request
     * @param {UsersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.NotFoundError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.users.streak("userId", {
     *         historyPeriods: 1
     *     })
     */
    streak(id: string, request?: TrophyApi.UsersStreakRequest, requestOptions?: UsersClient.RequestOptions): core.HttpResponsePromise<TrophyApi.StreakResponse>;
    private __streak;
    /**
     * Get a user's points for a specific points system.
     *
     * @param {string} id - ID of the user.
     * @param {string} key - Key of the points system.
     * @param {TrophyApi.UsersPointsRequest} request
     * @param {UsersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.NotFoundError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.users.points("userId", "points-system-key", {
     *         awards: 1
     *     })
     */
    points(id: string, key: string, request?: TrophyApi.UsersPointsRequest, requestOptions?: UsersClient.RequestOptions): core.HttpResponsePromise<TrophyApi.GetUserPointsResponse>;
    private __points;
    /**
     * Get active points boosts for a user in a specific points system. Returns both global boosts the user is eligible for and user-specific boosts.
     *
     * @param {string} id - ID of the user.
     * @param {string} key - Key of the points system.
     * @param {UsersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.NotFoundError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.users.pointsBoosts("userId", "points-system-key")
     */
    pointsBoosts(id: string, key: string, requestOptions?: UsersClient.RequestOptions): core.HttpResponsePromise<TrophyApi.PointsBoost[]>;
    private __pointsBoosts;
    /**
     * Get a summary of points awards over time for a user for a specific points system.
     *
     * @param {string} id - ID of the user.
     * @param {string} key - Key of the points system.
     * @param {TrophyApi.UsersPointsEventSummaryRequest} request
     * @param {UsersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.NotFoundError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.users.pointsEventSummary("userId", "points-system-key", {
     *         aggregation: "daily",
     *         startDate: "2024-01-01",
     *         endDate: "2024-01-31"
     *     })
     */
    pointsEventSummary(id: string, key: string, request: TrophyApi.UsersPointsEventSummaryRequest, requestOptions?: UsersClient.RequestOptions): core.HttpResponsePromise<TrophyApi.UsersPointsEventSummaryResponseItem[]>;
    private __pointsEventSummary;
    /**
     * Get a user's rank, value, and daily ranking history for a specific leaderboard.
     *
     * @param {string} id - The user's ID in your database.
     * @param {string} key - Unique key of the leaderboard as set when created.
     * @param {TrophyApi.UsersLeaderboardRequest} request
     * @param {UsersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.NotFoundError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.users.leaderboard("user-123", "weekly-words", {
     *         run: "2025-01-15",
     *         numEvents: 1
     *     })
     */
    leaderboard(id: string, key: string, request?: TrophyApi.UsersLeaderboardRequest, requestOptions?: UsersClient.RequestOptions): core.HttpResponsePromise<TrophyApi.UserLeaderboardResponseWithHistory>;
    private __leaderboard;
    /**
     * Get a user's year-in-review wrapped data.
     *
     * @param {string} id - The user's ID in your database.
     * @param {TrophyApi.UsersWrappedRequest} request
     * @param {UsersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.NotFoundError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.users.wrapped("user-123", {
     *         year: 1
     *     })
     */
    wrapped(id: string, request?: TrophyApi.UsersWrappedRequest, requestOptions?: UsersClient.RequestOptions): core.HttpResponsePromise<TrophyApi.WrappedResponse>;
    private __wrapped;
}
