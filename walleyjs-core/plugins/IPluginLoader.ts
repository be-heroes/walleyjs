import IPlugin from "./IPlugin"

interface IPluginLoader {
    canLoad(plugin: IPlugin): boolean;
    load(plugin: IPlugin, context?: any): Promise<void>;
}

export default IPluginLoader;