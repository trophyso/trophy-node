import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../../../BaseClient";
import { type NormalizedClientOptionsWithAuth } from "../../../../../../../../BaseClient";
import * as core from "../../../../../../../../core";
import * as TrophyApi from "../../../../../../../index";
export declare namespace TriggersClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class TriggersClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<TriggersClient.Options>;
    constructor(options: TriggersClient.Options);
    /**
     * List triggers for a reward. Active triggers are listed first.
     *
     * @param {string} rewardId - The UUID of the reward.
     * @param {TrophyApi.admin.rewards.TriggersListRequest} request
     * @param {TriggersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.NotFoundError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.admin.rewards.triggers.list("550e8400-e29b-41d4-a716-446655440000", {
     *         limit: 1,
     *         skip: 1
     *     })
     */
    list(rewardId: string, request?: TrophyApi.admin.rewards.TriggersListRequest, requestOptions?: TriggersClient.RequestOptions): core.HttpResponsePromise<TrophyApi.ListRewardTriggersResponse>;
    private __list;
    /**
     * Create reward triggers in bulk. Maximum 100 triggers per request.
     *
     * @param {string} rewardId - The UUID of the reward.
     * @param {TrophyApi.CreateRewardTriggersRequest} request
     * @param {TriggersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.NotFoundError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.admin.rewards.triggers.create("550e8400-e29b-41d4-a716-446655440000", [{
     *             type: "metric",
     *             metricId: "990c2800-c63f-45b8-e15a-88aa99880004",
     *             metricThreshold: 10
     *         }])
     */
    create(rewardId: string, request: TrophyApi.CreateRewardTriggersRequest, requestOptions?: TriggersClient.RequestOptions): core.HttpResponsePromise<TrophyApi.CreateRewardTriggersResponse>;
    private __create;
    /**
     * Delete reward triggers by ID. Maximum 100 trigger IDs per request. A reward with no triggers is not awarded until a trigger is added.
     *
     * @param {string} rewardId - The UUID of the reward.
     * @param {TrophyApi.admin.rewards.TriggersDeleteRequest} request
     * @param {TriggersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.NotFoundError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.admin.rewards.triggers.delete("550e8400-e29b-41d4-a716-446655440000", {
     *         ids: ["880b1700-b52e-44a7-d049-779988770003"]
     *     })
     */
    delete(rewardId: string, request?: TrophyApi.admin.rewards.TriggersDeleteRequest, requestOptions?: TriggersClient.RequestOptions): core.HttpResponsePromise<TrophyApi.DeleteRewardTriggersResponse>;
    private __delete;
    /**
     * Update reward triggers in bulk. Maximum 100 triggers per request. Only provided fields are updated; omitted fields are preserved. A trigger keeps its ID when its criteria change.
     *
     * @param {string} rewardId - The UUID of the reward.
     * @param {TrophyApi.UpdateRewardTriggersRequest} request
     * @param {TriggersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.NotFoundError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.admin.rewards.triggers.update("550e8400-e29b-41d4-a716-446655440000", [{
     *             id: "880b1700-b52e-44a7-d049-779988770003",
     *             status: "active"
     *         }])
     */
    update(rewardId: string, request: TrophyApi.UpdateRewardTriggersRequest, requestOptions?: TriggersClient.RequestOptions): core.HttpResponsePromise<TrophyApi.UpdateRewardTriggersResponse>;
    private __update;
    /**
     * Get a single reward trigger by ID.
     *
     * @param {string} rewardId - The UUID of the reward.
     * @param {string} id - The UUID of the reward trigger.
     * @param {TriggersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.NotFoundError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.admin.rewards.triggers.get("550e8400-e29b-41d4-a716-446655440000", "880b1700-b52e-44a7-d049-779988770003")
     */
    get(rewardId: string, id: string, requestOptions?: TriggersClient.RequestOptions): core.HttpResponsePromise<TrophyApi.AdminRewardTrigger>;
    private __get;
}
