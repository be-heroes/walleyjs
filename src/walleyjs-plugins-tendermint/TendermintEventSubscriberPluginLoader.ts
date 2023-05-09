import IPlugin from "@zaradarbh/walleyjs-core/lib/plugins/IPlugin";
import IPluginLoader from "@zaradarbh/walleyjs-core/lib/plugins/IPluginLoader";
import IContext from "@zaradarbh/walleyjs-core/lib/context/IContext";
import TendermintEventSubscriberPlugin, { pluginIdentifier } from "./TendermintEventSubscriberPlugin";

export default class TendermintEventSubscriberPluginLoader implements IPluginLoader {
    canLoad(plugin: IPlugin): boolean {
        return (plugin as TendermintEventSubscriberPlugin) !== undefined;
    }

    load(plugin: IPlugin, context: IContext): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            if (plugin.identifier === pluginIdentifier) {
                plugin.initialize(context).then(resolve, reject);
            } else {
                reject("Unsupported plugin");
            }
        });
    }
}