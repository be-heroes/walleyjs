import IPluginOptions from "@zaradarbh/walleyjs-core/lib/plugins/IPluginOptions";
import KafkaEventBridgeOptions from "./KafkaEventBridgeOptions";

export default class KafkaEventBridgePluginOptions extends KafkaEventBridgeOptions implements IPluginOptions {
    domEventHooks?: Array<string>;
}