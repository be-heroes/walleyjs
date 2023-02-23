import IPluginOptions from "./IPluginOptions";
import IContext from "../context/IContext";

interface IPlugin {
    identifier: string;
    options?: IPluginOptions;

    initialize(context: IContext): Promise<any | void>;
}

export default IPlugin;