import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const LeaderboardResponseUserAttributesItem: core.serialization.ObjectSchema<serializers.LeaderboardResponseUserAttributesItem.Raw, TrophyApi.LeaderboardResponseUserAttributesItem>;
export declare namespace LeaderboardResponseUserAttributesItem {
    interface Raw {
        key: string;
        value: string;
    }
}
