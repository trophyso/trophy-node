export interface TrophyApiEnvironmentUrls {
    api: string;
    admin: string;
}
export declare const TrophyApiEnvironment: {
    readonly Production: {
        readonly api: "https://api.trophy.so/v1";
        readonly admin: "https://admin.trophy.so/v1";
    };
};
export type TrophyApiEnvironment = typeof TrophyApiEnvironment.Production;
