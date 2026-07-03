import type { BaseClientOptions } from "../../../../../../BaseClient";
import { type NormalizedClientOptionsWithAuth } from "../../../../../../BaseClient";
import { BoostsClient } from "../resources/boosts/client/Client";
import { LevelsClient } from "../resources/levels/client/Client";
import { SystemsClient } from "../resources/systems/client/Client";
import { TriggersClient } from "../resources/triggers/client/Client";
export declare namespace PointsClient {
    type Options = BaseClientOptions;
}
export declare class PointsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<PointsClient.Options>;
    protected _systems: SystemsClient | undefined;
    protected _boosts: BoostsClient | undefined;
    protected _levels: LevelsClient | undefined;
    protected _triggers: TriggersClient | undefined;
    constructor(options: PointsClient.Options);
    get systems(): SystemsClient;
    get boosts(): BoostsClient;
    get levels(): LevelsClient;
    get triggers(): TriggersClient;
}
