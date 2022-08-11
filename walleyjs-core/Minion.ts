import { LitElement } from "lit-element";
import IPlugin from "./plugins/IPlugin";
import IPluginLoader from "./plugins/IPluginLoader";
import IMinionOptions from "./IMinionOptions";

export default abstract class Minion extends LitElement {
    protected readonly options: IMinionOptions | undefined;

    get plugins(): IPlugin[] | undefined {
        if (this.options !== undefined) {
            return this.options.plugins;
        }

        return undefined;
    }

    get identifier(): string | undefined {
        if (this.options !== undefined) {
            return this.options.identifier;
        }

        return undefined;
    }

    protected constructor(options?: IMinionOptions, loaders?: IPluginLoader[]) {
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
            });
        }
    }
}