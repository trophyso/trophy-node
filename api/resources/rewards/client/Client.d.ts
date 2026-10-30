import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient";
import * as core from "../../../../core";
import * as TrophyApi from "../../../index";
export declare namespace RewardsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class RewardsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<RewardsClient.Options>;
    constructor(options: RewardsClient.Options);
    /**
     * Redeem a reward for a user.
     *
     * @param {string} key - The key of the reward to redeem.
     * @param {TrophyApi.RewardsRedeemRequest} request
     * @param {RewardsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.NotFoundError}
     * @throws {@link TrophyApi.ConflictError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.rewards.redeem("key", {
     *         user: {
     *             id: "user-id"
     *         }
     *     })
     */
    redeem(key: string, request: TrophyApi.RewardsRedeemRequest, requestOptions?: RewardsClient.RequestOptions): core.HttpResponsePromise<TrophyApi.RedeemRewardResponse>;
    private __redeem;
}
