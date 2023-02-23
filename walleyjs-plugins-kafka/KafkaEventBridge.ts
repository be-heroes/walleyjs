import IEvent from "@zaradarbh/walleyjs-core/lib/events/IEvent";
import EventCallback from "@zaradarbh/walleyjs-core/lib/events/EventCallback";
import IPublisher from "@zaradarbh/walleyjs-core/lib/events/IPublisher";
import ISubscriber from "@zaradarbh/walleyjs-core/lib/events/ISubscriber";
import KafkaEventBridgeOptions from "./KafkaEventBridgeOptions";
import IContext from "@zaradarbh/walleyjs-core/lib/context/IContext";
import * as SignalR from "@microsoft/signalr";

export default class KafkaEventBridge implements IPublisher, ISubscriber, EventListenerObject {
    private readonly callbacks: Array<EventCallback> = new Array<EventCallback>();
    private readonly options: KafkaEventBridgeOptions;
    private readonly client: SignalR.HubConnection;
    private readonly context: IContext;

    constructor(options: KafkaEventBridgeOptions, context: IContext) {
        this.context = context;
        this.options = options;
        this.client = new SignalR.HubConnectionBuilder()
                        .withUrl(this.options.signalREndpoint)
                        .build();
        
        this.client.start().catch(err => console.log("SignalR.HubConnection error", err));
        this.client.on("ReceiveMessage", (data) => {
            this.callbacks.forEach((callback) => {
                callback(data);
            });
        });
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
            resolve(this.callbacks.push(callback) > this.callbacks.length);
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
                    source: this.context
                } as any);
            }
        }
    }
}