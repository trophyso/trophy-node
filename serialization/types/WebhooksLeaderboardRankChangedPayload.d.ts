import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { User } from "./User";
import { WebhookUserLeaderboardResponse } from "./WebhookUserLeaderboardResponse";
export declare const WebhooksLeaderboardRankChangedPayload: core.serialization.ObjectSchema<serializers.WebhooksLeaderboardRankChangedPayload.Raw, TrophyApi.WebhooksLeaderboardRankChangedPayload>;
export declare namespace WebhooksLeaderboardRankChangedPayload {
    interface Raw {
        type: "leaderboard.rank_changed";
        user: User.Raw;
        leaderboard: WebhookUserLeaderboardResponse.Raw;
    }
}
