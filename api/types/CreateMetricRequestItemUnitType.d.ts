/** The metric unit type. Defaults to `number`. */
export declare const CreateMetricRequestItemUnitType: {
    readonly Number: "number";
    readonly Currency: "currency";
};
export type CreateMetricRequestItemUnitType = (typeof CreateMetricRequestItemUnitType)[keyof typeof CreateMetricRequestItemUnitType];
