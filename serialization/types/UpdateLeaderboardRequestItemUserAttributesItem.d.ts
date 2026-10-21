import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const UpdateLeaderboardRequestItemUserAttributesItem: core.serialization.ObjectSchema<serializers.UpdateLeaderboardRequestItemUserAttributesItem.Raw, TrophyApi.UpdateLeaderboardRequestItemUserAttributesItem>;
export declare namespace UpdateLeaderboardRequestItemUserAttributesItem {
    interface Raw {
        attributeId: string;
        attributeValue: string;
    }
}
