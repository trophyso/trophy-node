import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../BaseClient";
import { type NormalizedClientOptionsWithAuth } from "../../../../../../BaseClient";
import * as core from "../../../../../../core";
import * as TrophyApi from "../../../../../index";
import { TriggersClient } from "../resources/triggers/client/Client";
export declare namespace RewardsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class RewardsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<RewardsClient.Options>;
    protected _triggers: TriggersClient | undefined;
    constructor(options: RewardsClient.Options);
    get triggers(): TriggersClient;
    /**
     * List rewards.
     *
     * @param {TrophyApi.admin.RewardsListRequest} request
     * @param {RewardsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.admin.rewards.list({
     *         limit: 1,
     *         skip: 1
     *     })
     */
    list(request?: TrophyApi.admin.RewardsListRequest, requestOptions?: RewardsClient.RequestOptions): core.HttpResponsePromise<TrophyApi.ListRewardsResponse>;
    private __list;
    /**
     * Create rewards. Optionally include triggers in each reward payload to create them alongside the reward. A reward with any invalid trigger is not created.
     *
     * @param {TrophyApi.CreateRewardsRequest} request
     * @param {RewardsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.admin.rewards.create([{
     *             name: "Welcome bonus",
     *             key: "welcome-bonus",
     *             description: "Points for finishing onboarding",
     *             type: "points",
     *             pointsSystemId: "660f9500-f30c-42e5-b827-557766550001",
     *             points: 100,
     *             maxRedemptions: 1,
     *             triggers: [{
     *                     type: "achievement",
     *                     status: "active",
     *                     achievementId: "770a0600-a41d-43f6-c938-668877660002"
     *                 }]
     *         }])
     */
    create(request: TrophyApi.CreateRewardsRequest, requestOptions?: RewardsClient.RequestOptions): core.HttpResponsePromise<TrophyApi.CreateRewardsResponse>;
    private __create;
    /**
     * Delete rewards by ID. Maximum 100 reward IDs per request. A deleted reward's triggers are deleted too.
     *
     * @param {TrophyApi.admin.RewardsDeleteRequest} request
     * @param {RewardsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.admin.rewards.delete({
     *         ids: ["550e8400-e29b-41d4-a716-446655440000"]
     *     })
     */
    delete(request?: TrophyApi.admin.RewardsDeleteRequest, requestOptions?: RewardsClient.RequestOptions): core.HttpResponsePromise<TrophyApi.DeleteRewardsResponse>;
    private __delete;
    /**
     * Update rewards by ID. Maximum 100 rewards per request. Only provided fields are updated; omitted fields are preserved. Use the reward triggers endpoints to change a reward's triggers.
     *
     * @param {TrophyApi.UpdateRewardsRequest} request
     * @param {RewardsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.admin.rewards.update([{
     *             id: "550e8400-e29b-41d4-a716-446655440000",
     *             status: "active",
     *             points: 150
     *         }])
     */
    update(request: TrophyApi.UpdateRewardsRequest, requestOptions?: RewardsClient.RequestOptions): core.HttpResponsePromise<TrophyApi.UpdateRewardsResponse>;
    private __update;
    /**
     * Get a reward by ID.
     *
     * @param {string} id - The ID of the reward.
     * @param {RewardsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.NotFoundError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.admin.rewards.get("550e8400-e29b-41d4-a716-446655440000")
     */
    get(id: string, requestOptions?: RewardsClient.RequestOptions): core.HttpResponsePromise<TrophyApi.AdminReward>;
    private __get;
}
