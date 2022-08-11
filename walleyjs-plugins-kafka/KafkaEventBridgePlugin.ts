import IPlugin from "@be-heroes/walleyjs-core/lib/plugins/IPlugin";
import KafkaEventBridge from "./KafkaEventBridge";
import KafkaEventBridgePluginOptions from "./KafkaEventBridgePluginOptions";
import KafkaEventBridgeOptions from "./KafkaEventBridgeOptions";

export const pluginIdentifier: string = "KafkaEventBridgePlugin";

export default class KafkaEventBridgePlugin implements IPlugin {
    options: KafkaEventBridgePluginOptions;
    name = pluginIdentifier;

    constructor(options: KafkaEventBridgePluginOptions) {
        this.options = options;
    }

    initialize(context?: any): Promise<void> {
        return new Promise<void>((resolve) => {
            const eventBridgeOptions = new KafkaEventBridgeOptions();
            eventBridgeOptions.signalREndpoint = this.options.signalREndpoint;

            const eventBridge = new KafkaEventBridge(eventBridgeOptions);

            if (context instanceof HTMLElement) {
                this.options.domEventMap?.forEach((eventName: string) => {
                    context.addEventListener(eventName, eventBridge);
                });
            }

            resolve();
        });
    }
}