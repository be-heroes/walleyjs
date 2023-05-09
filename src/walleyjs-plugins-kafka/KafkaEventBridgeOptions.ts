import IOptions from "@zaradarbh/walleyjs-core/lib/options/IOptions";

export default class KafkaEventBridgeOptions implements IOptions {
    signalREndpoint: string = "http://localhost:5000/kafka";
}