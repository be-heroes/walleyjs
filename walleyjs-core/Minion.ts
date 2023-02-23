import { LitElement } from "lit-element";
import IPluginLoader from "./plugins/IPluginLoader";
import IPlugin from "./plugins/IPlugin";
import IContext from "./context/IContext";
import MinionOptions from "./MinionOptions";

export default abstract class Minion extends LitElement implements IContext {
    protected readonly options: MinionOptions | undefined;
    
    get identifier(): string | undefined {
        if (this.options !== undefined) {
            return this.options.identifier;
        }

        return undefined;
    }

    get plugins(): IPlugin[] | undefined {
        if (this.options !== undefined) {
            return this.options.plugins;
        }

        return undefined;
    }

    protected constructor(options?: MinionOptions, loaders?: IPluginLoader[]) {
        super();

        this.options = options;

        if (this.plugins !== undefined) {
            this.plugins.forEach((plugin: any) => {
                const loader: IPluginLoader | undefined = loaders?.find((item: IPluginLoader) => {
                    if (item.canLoad(plugin)) {
                        return item;
                    }

                    return undefined;
                });

                if (loader) {
                    loader.load(plugin, this);
                }
                else {
                    console.warn(`No loader found for plugin ${plugin}`);
                }
            });
        }
    }
}