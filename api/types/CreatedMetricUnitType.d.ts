/** The metric unit type. */
export declare const CreatedMetricUnitType: {
    readonly Number: "number";
    readonly Currency: "currency";
};
export type CreatedMetricUnitType = (typeof CreatedMetricUnitType)[keyof typeof CreatedMetricUnitType];
