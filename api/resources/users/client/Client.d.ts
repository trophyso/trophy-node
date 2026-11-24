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
     * @throws {@link TrophyApi.ForbiddenError}
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
     * @throws {@link TrophyApi.ForbiddenError}
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
     * @throws {@link TrophyApi.ForbiddenError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.users.identify("id", {
     *         email: "user@example.com",
     *         tz: "Europe/London",
     *         signUpDate: "2020-08-20",
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
     * @throws {@link TrophyApi.ForbiddenError}
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
     * Get a user's notification, streak and agentic messaging preferences.
     *
     * @param {string} id - The user's ID in your database.
     * @param {UsersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.ForbiddenError}
     * @throws {@link TrophyApi.NotFoundError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.users.getPreferences("user-123")
     */
    getPreferences(id: string, requestOptions?: UsersClient.RequestOptions): core.HttpResponsePromise<TrophyApi.UserPreferencesResponse>;
    private __getPreferences;
    /**
     * Update a user's notification, streak and agentic messaging preferences. Streak preferences other than `streak.enabled` require streak customization to be enabled in your Trophy dashboard settings.
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
     *                 }],
     *             daysOff: [0, 6]
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
     * @throws {@link TrophyApi.ForbiddenError}
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
     * @throws {@link TrophyApi.ForbiddenError}
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
     * @throws {@link TrophyApi.ForbiddenError}
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
     * @throws {@link TrophyApi.ForbiddenError}
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
     * Get rewards awarded to a user. Filter by redeemed state and the date the reward was awarded.
     *
     * @param {string} id - The ID of the user in your database.
     * @param {TrophyApi.UsersRewardsRequest} request
     * @param {UsersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.ForbiddenError}
     * @throws {@link TrophyApi.NotFoundError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.users.rewards("id", {
     *         redeemed: true,
     *         startDate: "startDate",
     *         endDate: "endDate",
     *         skip: 1,
     *         limit: 1
     *     })
     */
    rewards(id: string, request?: TrophyApi.UsersRewardsRequest, requestOptions?: UsersClient.RequestOptions): core.HttpResponsePromise<TrophyApi.UserRewardResponse[]>;
    private __rewards;
    /**
     * Get a user's goals, each with its steps. Filter by status, and page through them with `skip` and `limit`.
     *
     * @param {string} id - The user's ID in your database.
     * @param {TrophyApi.UsersGoalsRequest} request
     * @param {UsersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.ForbiddenError}
     * @throws {@link TrophyApi.NotFoundError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.users.goals("user-123", {
     *         status: "active",
     *         skip: 1,
     *         limit: 1
     *     })
     */
    goals(id: string, request?: TrophyApi.UsersGoalsRequest, requestOptions?: UsersClient.RequestOptions): core.HttpResponsePromise<TrophyApi.GoalResponse[]>;
    private __goals;
    /**
     * Create a goal for a user, or with `parent` a step at the end of that goal's steps.
     *
     * @param {string} id - The user's ID in your database.
     * @param {TrophyApi.CreateGoalRequest} request
     * @param {UsersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.ForbiddenError}
     * @throws {@link TrophyApi.NotFoundError}
     * @throws {@link TrophyApi.ConflictError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.users.createGoal("user-123", {
     *         key: "spanish-exam",
     *         label: "Spanish B1 exam",
     *         completion: "none",
     *         dueAt: "2026-11-20T09:00:00Z"
     *     })
     *
     * @example
     *     await client.users.createGoal("user-123", {
     *         key: "first-essay",
     *         label: "First essay",
     *         dueAt: "2026-11-12T17:00:00Z"
     *     })
     *
     * @example
     *     await client.users.createGoal("user-123", {
     *         key: "spanish-exam",
     *         label: "Spanish B1 exam",
     *         completion: "none",
     *         dueAt: "2026-11-20T09:00:00Z",
     *         steps: [{
     *                 key: "unit-1",
     *                 label: "Unit 1 vocabulary",
     *                 dueAt: "2026-11-10T09:00:00Z"
     *             }, {
     *                 key: "unit-2",
     *                 label: "Unit 2 grammar",
     *                 dueAt: "2026-11-14T09:00:00Z"
     *             }]
     *     })
     *
     * @example
     *     await client.users.createGoal("user-123", {
     *         key: "lessons",
     *         label: "50 lessons",
     *         completion: "metric",
     *         metric: "lessons",
     *         target: 50
     *     })
     *
     * @example
     *     await client.users.createGoal("user-123", {
     *         key: "unit-3",
     *         parent: "spanish-exam",
     *         label: "Unit 3 listening",
     *         dueAt: "2026-11-17T09:00:00Z"
     *     })
     */
    createGoal(id: string, request: TrophyApi.CreateGoalRequest, requestOptions?: UsersClient.RequestOptions): core.HttpResponsePromise<TrophyApi.GoalResponse>;
    private __createGoal;
    /**
     * Get a user's goal or step by its key, with a goal's steps.
     *
     * @param {string} id - The user's ID in your database.
     * @param {string} key - The goal's or step's key.
     * @param {UsersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.ForbiddenError}
     * @throws {@link TrophyApi.NotFoundError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.users.getGoal("user-123", "spanish-exam")
     */
    getGoal(id: string, key: string, requestOptions?: UsersClient.RequestOptions): core.HttpResponsePromise<TrophyApi.GoalResponse>;
    private __getGoal;
    /**
     * Delete a user's goal.
     *
     * @param {string} id - The user's ID in your database.
     * @param {string} key - The goal's key.
     * @param {UsersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.ForbiddenError}
     * @throws {@link TrophyApi.NotFoundError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.users.deleteGoal("user-123", "spanish-exam")
     */
    deleteGoal(id: string, key: string, requestOptions?: UsersClient.RequestOptions): core.HttpResponsePromise<void>;
    private __deleteGoal;
    /**
     * Update a goal for a user.
     *
     * @param {string} id - The user's ID in your database.
     * @param {string} key - The goal's key.
     * @param {TrophyApi.UpdateGoalRequest} request
     * @param {UsersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.ForbiddenError}
     * @throws {@link TrophyApi.NotFoundError}
     * @throws {@link TrophyApi.ConflictError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.users.updateGoal("user-123", "first-essay", {
     *         completedAt: "2026-11-12T14:21:08Z"
     *     })
     *
     * @example
     *     await client.users.updateGoal("user-123", "first-essay", {
     *         dueAt: "2026-11-13T17:00:00Z"
     *     })
     *
     * @example
     *     await client.users.updateGoal("user-123", "first-essay", {
     *         steps: [{
     *                 key: "unit-1"
     *             }, {
     *                 key: "unit-2",
     *                 dueAt: "2026-11-15T09:00:00Z"
     *             }, {
     *                 key: "unit-3",
     *                 label: "Unit 3 listening"
     *             }]
     *     })
     */
    updateGoal(id: string, key: string, request?: TrophyApi.UpdateGoalRequest, requestOptions?: UsersClient.RequestOptions): core.HttpResponsePromise<TrophyApi.GoalResponse>;
    private __updateGoal;
    /**
     * Get a user's streak data.
     *
     * @param {string} id - ID of the user.
     * @param {TrophyApi.UsersStreakRequest} request
     * @param {UsersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.ForbiddenError}
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
     * @throws {@link TrophyApi.ForbiddenError}
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
     * @throws {@link TrophyApi.ForbiddenError}
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
     * @throws {@link TrophyApi.ForbiddenError}
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
     * @throws {@link TrophyApi.ForbiddenError}
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
     * @throws {@link TrophyApi.ForbiddenError}
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
