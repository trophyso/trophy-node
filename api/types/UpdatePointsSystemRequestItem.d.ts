import type * as TrophyApi from "../index";
/**
 * A points system update object. Only id is required; all other fields are optional.
 */
export interface UpdatePointsSystemRequestItem {
    /** The UUID of the points system to update. */
    id: string;
    /** Updated name. */
    name?: string;
    /** Updated description. */
    description?: string;
    /** Updated badge. Set to null to remove. */
    badge?: TrophyApi.UpdatePointsSystemRequestItemBadge;
    /** Updated max points. Set to null to remove. */
    maxPoints?: number;
}
