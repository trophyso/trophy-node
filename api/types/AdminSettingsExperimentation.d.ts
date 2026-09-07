/**
 * Experimentation settings.
 */
export interface AdminSettingsExperimentation {
    /** Percentage of new users assigned to the control group. */
    controlRatio: number;
    /** Number of days after a user's first event used to measure retention and early engagement. */
    userActivationWindow: number;
}
