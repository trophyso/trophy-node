import type { BaseClientOptions } from "../../../../BaseClient";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient";
import { AttributesClient } from "../resources/attributes/client/Client";
import { LeaderboardsClient } from "../resources/leaderboards/client/Client";
import { MetricsClient } from "../resources/metrics/client/Client";
import { PointsClient } from "../resources/points/client/Client";
import { StreaksClient } from "../resources/streaks/client/Client";
import { TenantsClient } from "../resources/tenants/client/Client";
export declare namespace AdminClient {
    type Options = BaseClientOptions;
}
export declare class AdminClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<AdminClient.Options>;
    protected _attributes: AttributesClient | undefined;
    protected _metrics: MetricsClient | undefined;
    protected _leaderboards: LeaderboardsClient | undefined;
    protected _streaks: StreaksClient | undefined;
    protected _tenants: TenantsClient | undefined;
    protected _points: PointsClient | undefined;
    constructor(options: AdminClient.Options);
    get attributes(): AttributesClient;
    get metrics(): MetricsClient;
    get leaderboards(): LeaderboardsClient;
    get streaks(): StreaksClient;
    get tenants(): TenantsClient;
    get points(): PointsClient;
}
