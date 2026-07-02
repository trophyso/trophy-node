export interface TrophyApiEnvironmentUrls {
    api: string;
    admin: string;
}
export declare const TrophyApiEnvironment: {
    readonly Production: {
        readonly api: "https://staging-api.trophy.so/v1";
        readonly admin: "https://staging-admin.trophy.so/v1";
    };
};
export type TrophyApiEnvironment = typeof TrophyApiEnvironment.Production;
