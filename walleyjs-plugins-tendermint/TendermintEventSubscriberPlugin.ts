import IPlugin from "@zaradarbh/walleyjs-core/lib/plugins/IPlugin";
import IContext from "@zaradarbh/walleyjs-core/lib/context/IContext";
import TendermintEventSubscriber from "./TendermintEventSubscriber";
import TendermintEventSubscriberPluginOptions from "./TendermintEventSubscriberPluginOptions";

export const pluginIdentifier: string = "TendermintEventSubscriberPlugin";

export default class TendermintEventSubscriberPlugin implements IPlugin {
    options: TendermintEventSubscriberPluginOptions;
    identifier: string = pluginIdentifier;

    constructor(options: TendermintEventSubscriberPluginOptions) {
        this.options = options;
    }

    initialize(context: IContext): Promise<any | void> {
        return new Promise<void>((resolve) => {
            const eventBridge = new TendermintEventSubscriber(this.options);

            if (context instanceof HTMLElement) {
                this.options.domEventHooks?.forEach((eventName: string) => {
                    context.addEventListener(eventName, eventBridge);
                });
            }

            resolve();
        });
    }
}