import IPlugin from "./IPlugin"
import IContext from "../context/IContext";

interface IPluginLoader {
    canLoad(plugin: IPlugin): boolean;
    load(plugin: IPlugin, context: IContext): Promise<any | void>;
}

export default IPluginLoader;