import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { PointsLevel } from "./PointsLevel";
import { User } from "./User";
import { WebhooksPointsLevelChangedPayloadPoints } from "./WebhooksPointsLevelChangedPayloadPoints";
export declare const WebhooksPointsLevelChangedPayload: core.serialization.ObjectSchema<serializers.WebhooksPointsLevelChangedPayload.Raw, TrophyApi.WebhooksPointsLevelChangedPayload>;
export declare namespace WebhooksPointsLevelChangedPayload {
    interface Raw {
        type: "points.level_changed";
        user: User.Raw;
        points: WebhooksPointsLevelChangedPayloadPoints.Raw;
        previousLevel?: PointsLevel.Raw | null;
        newLevel?: PointsLevel.Raw | null;
    }
}
