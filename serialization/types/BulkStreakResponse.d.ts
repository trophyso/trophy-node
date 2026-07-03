import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { BulkStreakResponseItem } from "./BulkStreakResponseItem";
export declare const BulkStreakResponse: core.serialization.Schema<serializers.BulkStreakResponse.Raw, TrophyApi.BulkStreakResponse>;
export declare namespace BulkStreakResponse {
    type Raw = BulkStreakResponseItem.Raw[];
}
