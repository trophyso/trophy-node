import type * as TrophyApi from "../index";
/**
 * An object with editable user fields.
 */
export interface UpsertedUser extends TrophyApi.UpdatedUser {
    /** The ID of the user in your database. Must be a string. */
    id: string;
}
