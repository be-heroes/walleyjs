import IPlugin from "@zaradarbh/walleyjs-core/lib/plugins/IPlugin";
import IContext from "@zaradarbh/walleyjs-core/lib/context/IContext";
import KafkaEventBridge from "./KafkaEventBridge";
import KafkaEventBridgePluginOptions from "./KafkaEventBridgePluginOptions";
import KafkaEventBridgeOptions from "./KafkaEventBridgeOptions";

export const pluginIdentifier: string = "KafkaEventBridgePlugin";

export default class KafkaEventBridgePlugin implements IPlugin {
    options: KafkaEventBridgePluginOptions;
    identifier: string = pluginIdentifier;

    constructor(options: KafkaEventBridgePluginOptions) {
        this.options = options;
    }

    initialize(context?: IContext): Promise<any | void> {
        return new Promise<void>((resolve) => {
            const eventBridgeOptions = new KafkaEventBridgeOptions();
            eventBridgeOptions.signalREndpoint = this.options.signalREndpoint;

            const eventBridge = new KafkaEventBridge(eventBridgeOptions);

            if (context instanceof HTMLElement) {
                this.options.domEventHooks?.forEach((eventName: string) => {
                    context.addEventListener(eventName, eventBridge);
                });
            }

            resolve();
        });
    }
}