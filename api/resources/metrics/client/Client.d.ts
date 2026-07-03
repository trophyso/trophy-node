import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient";
import * as core from "../../../../core";
import * as TrophyApi from "../../../index";
export declare namespace MetricsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class MetricsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<MetricsClient.Options>;
    constructor(options: MetricsClient.Options);
    /**
     * Increment or decrement the value of a metric for a user.
     *
     * @param {string} key - Unique reference of the metric as set when created.
     * @param {TrophyApi.MetricsEventRequest} request
     * @param {MetricsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrophyApi.BadRequestError}
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.UnprocessableEntityError}
     *
     * @example
     *     await client.metrics.event("words-written", {
     *         idempotencyKey: "e4296e4b-8493-4bd1-9c30-5a1a9ac4d78f",
     *         user: {
     *             email: "user@example.com",
     *             tz: "Europe/London",
     *             attributes: {
     *                 "department": "engineering",
     *                 "role": "developer"
     *             },
     *             id: "18"
     *         },
     *         value: 750,
     *         attributes: {
     *             "category": "writing",
     *             "source": "mobile-app"
     *         }
     *     })
     */
    event(key: string, request: TrophyApi.MetricsEventRequest, requestOptions?: MetricsClient.RequestOptions): core.HttpResponsePromise<TrophyApi.EventResponse>;
    private __event;
}
