/** How progress is displayed in email chart blocks and how often recap messages send. */
export declare const AdminAggregationPeriod: {
    readonly Weekly: "weekly";
    readonly Monthly: "monthly";
};
export type AdminAggregationPeriod = (typeof AdminAggregationPeriod)[keyof typeof AdminAggregationPeriod];
