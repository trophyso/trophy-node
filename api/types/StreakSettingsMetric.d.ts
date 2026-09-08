/**
 * A metric that counts toward the organization streak.
 */
export interface StreakSettingsMetric {
    /** The metric key. */
    key: string;
    /** Minimum metric change in a streak period to count toward the streak. */
    threshold: number;
}
