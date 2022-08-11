import IEvent from "@be-heroes/walleyjs-core/lib/events/IEvent";
import EventCallback from "@be-heroes/walleyjs-core/lib/events/EventCallback";
import IPublisher from "@be-heroes/walleyjs-core/lib/events/IPublisher";
import ISubscriber from "@be-heroes/walleyjs-core/lib/events/ISubscriber";
import KafkaEventBridgeOptions from "./KafkaEventBridgeOptions";
import * as SignalR from "@microsoft/signalr";

export default class KafkaEventBridge implements IPublisher, ISubscriber, EventListenerObject {
    private readonly callbacks: Array<EventCallback> = new Array<EventCallback>();
    private readonly options: KafkaEventBridgeOptions;
    private readonly client: SignalR.HubConnection;
    
    constructor(options: KafkaEventBridgeOptions) {
        this.options = options;

        this.client = new SignalR.HubConnectionBuilder()
            .withUrl(this.options.signalREndpoint)
            .build();

        this.client.on("ReceiveMessage", (data) => {
            this.callbacks.forEach((callback) => {
                callback(data);
            });
        });

        this.client.start().catch(err => console.log("signalr error", err));
    }
    
    publish(event: IEvent): Promise<boolean> {
        return new Promise<boolean>((resolve) => {
            if (event !== undefined && this.client.state === SignalR.HubConnectionState.Connected) {
                this.client.send(JSON.stringify(event));

                resolve(true);
            };

            resolve(false);
        });
    }

    subscribe(callback: EventCallback): boolean {
        const currentCount = this.callbacks.length;

        return this.callbacks.push(callback) > currentCount;
    }

    handleEvent(domEvent: Event): void {
        if (domEvent.composed && domEvent instanceof CustomEvent) {
            if (typeof domEvent.detail === "function") {
                this.subscribe((domEvent.detail as any) as EventCallback);
            }
            else {
                this.publish({
                    id: domEvent.type,
                    version: domEvent.timeStamp.toString(),
                    payload: domEvent.detail,
                    source: domEvent.srcElement
                } as any);
            }
        }
    }
}