import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const AdminLeaderboardUserAttributesItem: core.serialization.ObjectSchema<serializers.AdminLeaderboardUserAttributesItem.Raw, TrophyApi.AdminLeaderboardUserAttributesItem>;
export declare namespace AdminLeaderboardUserAttributesItem {
    interface Raw {
        attributeId: string;
        attributeValue: string;
    }
}
