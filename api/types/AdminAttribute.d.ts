import type * as TrophyApi from "../index";
/**
 * An attribute returned from the admin attributes endpoints.
 */
export interface AdminAttribute {
    /** The UUID of the attribute. */
    id: string;
    /** The attribute name. */
    name: string;
    /** The attribute key. */
    key: string;
    /** The attribute type. */
    type: TrophyApi.AdminAttributeType;
}
