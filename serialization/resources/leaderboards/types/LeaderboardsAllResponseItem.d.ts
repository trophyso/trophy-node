import type * as TrophyApi from "../../../../api/index";
import * as core from "../../../../core";
import type * as serializers from "../../../index";
import { LeaderboardResponse } from "../../../types/LeaderboardResponse";
import { LeaderboardsAllResponseItemStatus } from "./LeaderboardsAllResponseItemStatus";
export declare const LeaderboardsAllResponseItem: core.serialization.ObjectSchema<serializers.LeaderboardsAllResponseItem.Raw, TrophyApi.LeaderboardsAllResponseItem>;
export declare namespace LeaderboardsAllResponseItem {
    interface Raw extends LeaderboardResponse.Raw {
        status: LeaderboardsAllResponseItemStatus.Raw;
    }
}
