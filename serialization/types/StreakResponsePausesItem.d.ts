import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const StreakResponsePausesItem: core.serialization.ObjectSchema<serializers.StreakResponsePausesItem.Raw, TrophyApi.StreakResponsePausesItem>;
export declare namespace StreakResponsePausesItem {
    interface Raw {
        id: string;
        start: string;
        end: string;
    }
}
