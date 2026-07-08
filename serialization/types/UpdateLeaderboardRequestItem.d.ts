import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { UpdateLeaderboardRequestItemRankBy } from "./UpdateLeaderboardRequestItemRankBy";
import { UpdateLeaderboardRequestItemRunUnit } from "./UpdateLeaderboardRequestItemRunUnit";
import { UpdateLeaderboardRequestItemStatus } from "./UpdateLeaderboardRequestItemStatus";
export declare const UpdateLeaderboardRequestItem: core.serialization.ObjectSchema<serializers.UpdateLeaderboardRequestItem.Raw, TrophyApi.UpdateLeaderboardRequestItem>;
export declare namespace UpdateLeaderboardRequestItem {
    interface Raw {
        id: string;
        name?: string | null;
        key?: string | null;
        description?: string | null;
        status?: UpdateLeaderboardRequestItemStatus.Raw | null;
        rankBy?: UpdateLeaderboardRequestItemRankBy.Raw | null;
        metricId?: string | null;
        pointsSystemId?: string | null;
        maxParticipants?: number | null;
        start?: string | null;
        end?: string | null;
        startTime?: string | null;
        endTime?: string | null;
        breakdownAttributes?: string[] | null;
        runUnit?: UpdateLeaderboardRequestItemRunUnit.Raw | null;
        runInterval?: number | null;
    }
}
