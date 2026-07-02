import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { CreateLeaderboardRequestItem } from "./CreateLeaderboardRequestItem";
export declare const CreateLeaderboardsRequest: core.serialization.Schema<serializers.CreateLeaderboardsRequest.Raw, TrophyApi.CreateLeaderboardsRequest>;
export declare namespace CreateLeaderboardsRequest {
    type Raw = CreateLeaderboardRequestItem.Raw[];
}
