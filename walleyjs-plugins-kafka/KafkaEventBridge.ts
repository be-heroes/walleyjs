import IEvent from "@zaradarbh/walleyjs-core/lib/events/IEvent";
import EventCallback from "@zaradarbh/walleyjs-core/lib/events/EventCallback";
import IPublisher from "@zaradarbh/walleyjs-core/lib/events/IPublisher";
import ISubscriber from "@zaradarbh/walleyjs-core/lib/events/ISubscriber";
import KafkaEventBridgeOptions from "./KafkaEventBridgeOptions";
import * as SignalR from "@microsoft/signalr";

export default class KafkaEventBridge implements IPublisher, ISubscriber, EventListenerObject {
    private readonly callbacks: Array<EventCallback> = new Array<EventCallback>();
    private readonly options: KafkaEventBridgeOptions;
    private readonly client: SignalR.HubConnection;
    
    get signalREndpoint(): string | undefined {
        if (this.options !== undefined) {
            return this.options.signalREndpoint;
        }

        return undefined;
    }

    constructor(options: KafkaEventBridgeOptions) {
        this.options = options;

        var builder = new SignalR.HubConnectionBuilder();

        if(this.signalREndpoint) {
            builder.withUrl(this.signalREndpoint)
        }

        this.client = builder.build();

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

    subscribe(callback: EventCallback): Promise<boolean> {
        return new Promise<boolean>((resolve) => {            
            const currentCount = this.callbacks.length;

            resolve(this.callbacks.push(callback) > currentCount);
        });
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