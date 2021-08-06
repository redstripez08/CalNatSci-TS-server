declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PORT?: string;
            NODE_ENV?: "development" | "production";
            SERVER_AUTH?: string;
        }
    }
}

export {};
