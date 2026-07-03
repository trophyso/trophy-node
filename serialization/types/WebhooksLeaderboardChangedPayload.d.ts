import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { LeaderboardResponseWithRankings } from "./LeaderboardResponseWithRankings";
export declare const WebhooksLeaderboardChangedPayload: core.serialization.ObjectSchema<serializers.WebhooksLeaderboardChangedPayload.Raw, TrophyApi.WebhooksLeaderboardChangedPayload>;
export declare namespace WebhooksLeaderboardChangedPayload {
    interface Raw {
        type: "leaderboard.changed";
        leaderboard: LeaderboardResponseWithRankings.Raw;
    }
}
