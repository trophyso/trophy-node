import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { UpdateLeaderboardRequestItem } from "./UpdateLeaderboardRequestItem";
export declare const UpdateLeaderboardsRequest: core.serialization.Schema<serializers.UpdateLeaderboardsRequest.Raw, TrophyApi.UpdateLeaderboardsRequest>;
export declare namespace UpdateLeaderboardsRequest {
    type Raw = UpdateLeaderboardRequestItem.Raw[];
}
