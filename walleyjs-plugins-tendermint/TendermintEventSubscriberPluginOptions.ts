import IPluginOptions from "@zaradarbh/walleyjs-core/lib/plugins/IPluginOptions";
import TendermintEventSubscriberOptions from "./TendermintEventSubscriberOptions";

export default class TendermintEventSubscriberPluginOptions extends TendermintEventSubscriberOptions implements IPluginOptions {
    domEventHooks?: Array<string>;
}