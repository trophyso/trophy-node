import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { UserLeaderboardResponse } from "./UserLeaderboardResponse";
export declare const WebhookUserLeaderboardResponse: core.serialization.ObjectSchema<serializers.WebhookUserLeaderboardResponse.Raw, TrophyApi.WebhookUserLeaderboardResponse>;
export declare namespace WebhookUserLeaderboardResponse {
    interface Raw extends UserLeaderboardResponse.Raw {
        previousRank?: number | null;
        previousValue?: number | null;
    }
}
