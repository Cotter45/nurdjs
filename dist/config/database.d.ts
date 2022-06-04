declare const _default: {
    development: {
        username: string | undefined;
        password: string | undefined;
        database: string | undefined;
        host: string | undefined;
        dialect: string;
        seederStorage: string;
    };
    production: {
        use_env_variable: string;
        dialect: string;
        seederStorage: string;
        dialectOptions: {
            ssl: {
                require: boolean;
                rejectUnauthorized: boolean;
            };
        };
    };
};
export = _default;
