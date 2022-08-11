interface IPlugin {
    name: string;
    options?: any;

    initialize(context?: any): Promise<void>;
}

export default IPlugin;