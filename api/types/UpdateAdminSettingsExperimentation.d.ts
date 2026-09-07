/**
 * Experimentation fields to update. Omitted fields stay as-is.
 */
export interface UpdateAdminSettingsExperimentation {
    /** Percentage of new users assigned to the control group. */
    controlRatio?: number;
    /** Number of days after a user's first event used to measure retention and early engagement. */
    userActivationWindow?: number;
}
