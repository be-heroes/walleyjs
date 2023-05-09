import IPlugin from "@zaradarbh/walleyjs-core/lib/plugins/IPlugin";
import IPluginLoader from "@zaradarbh/walleyjs-core/lib/plugins/IPluginLoader";
import IContext from "@zaradarbh/walleyjs-core/lib/context/IContext";
import KafkaEventBridgePlugin, { pluginIdentifier } from "./KafkaEventBridgePlugin";

export default class KafkaEventBridgePluginLoader implements IPluginLoader {
    canLoad(plugin: IPlugin): boolean {
        return (plugin as KafkaEventBridgePlugin) !== undefined;
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