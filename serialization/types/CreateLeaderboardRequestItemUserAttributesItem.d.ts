import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const CreateLeaderboardRequestItemUserAttributesItem: core.serialization.ObjectSchema<serializers.CreateLeaderboardRequestItemUserAttributesItem.Raw, TrophyApi.CreateLeaderboardRequestItemUserAttributesItem>;
export declare namespace CreateLeaderboardRequestItemUserAttributesItem {
    interface Raw {
        attributeId: string;
        attributeValue: string;
    }
}
