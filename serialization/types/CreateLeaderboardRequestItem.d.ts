import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { CreateLeaderboardRequestItemRankBy } from "./CreateLeaderboardRequestItemRankBy";
import { CreateLeaderboardRequestItemRunUnit } from "./CreateLeaderboardRequestItemRunUnit";
import { CreateLeaderboardRequestItemStatus } from "./CreateLeaderboardRequestItemStatus";
export declare const CreateLeaderboardRequestItem: core.serialization.ObjectSchema<serializers.CreateLeaderboardRequestItem.Raw, TrophyApi.CreateLeaderboardRequestItem>;
export declare namespace CreateLeaderboardRequestItem {
    interface Raw {
        name: string;
        key: string;
        description?: string | null;
        status?: CreateLeaderboardRequestItemStatus.Raw | null;
        rankBy: CreateLeaderboardRequestItemRankBy.Raw;
        metricId?: string | null;
        pointsSystemId?: string | null;
        maxParticipants?: number | null;
        start?: string | null;
        end?: string | null;
        startTime?: string | null;
        endTime?: string | null;
        breakdownAttributes?: string[] | null;
        runUnit?: CreateLeaderboardRequestItemRunUnit.Raw | null;
        runInterval?: number | null;
    }
}
