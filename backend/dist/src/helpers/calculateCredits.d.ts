declare const planConfig: {
    FREE: {
        collections: number;
        requests: number;
        historyPeriod: number;
        auth: string;
        communitySupport: boolean;
        envs: boolean;
        requestScripts: boolean;
        prioritySupport: boolean;
    };
    PRO: {
        collections: number;
        requests: number;
        historyPeriod: number;
        auth: string;
        envs: boolean;
        communitySupport: boolean;
        requestScripts: boolean;
        prioritySupport: boolean;
    };
};
export declare const calculateCredits: (planType: keyof typeof planConfig) => number;
export {};
//# sourceMappingURL=calculateCredits.d.ts.map