/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as TrophyApi from "../../..";
export declare namespace Points {
    interface Options {
        environment?: core.Supplier<environments.TrophyApiEnvironment | string>;
        apiKey: core.Supplier<string>;
    }
    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}
export declare class Points {
    protected readonly _options: Points.Options;
    constructor(_options: Points.Options);
    /**
     * Get a breakdown of the number of users with points in each range.
     * @throws {@link TrophyApi.UnauthorizedError}
     * @throws {@link TrophyApi.NotFoundError}
     *
     * @example
     *     await trophyApi.points.summary()
     */
    summary(requestOptions?: Points.RequestOptions): Promise<TrophyApi.PointsSummaryResponse>;
    /**
     * Get all points triggers.
     * @throws {@link TrophyApi.UnauthorizedError}
     *
     * @example
     *     await trophyApi.points.triggers()
     */
    triggers(requestOptions?: Points.RequestOptions): Promise<TrophyApi.PointsTriggerResponse[]>;
}
