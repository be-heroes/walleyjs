import EventCallback from "@zaradarbh/walleyjs-core/lib/events/EventCallback";
import ISubscriber from "@zaradarbh/walleyjs-core/lib/events/ISubscriber";
import IContext from "@zaradarbh/walleyjs-core/lib/context/IContext";
import TendermintEventSubscriberOptions from "./TendermintEventSubscriberOptions";

export default class TendermintEventSubscriber implements ISubscriber, EventListenerObject {
    private readonly callbacks: Array<EventCallback> = new Array<EventCallback>();
    private readonly options: TendermintEventSubscriberOptions;
    
    constructor(options: TendermintEventSubscriberOptions, context: IContext) {
        this.options = options;

        const ws = new WebSocket(this.options.tendermintEndpoint);
     
        ws.onmessage = (event) => {
            this.callbacks.forEach((callback) => {
                callback(event.data);
            });
        }
        
        ws.onerror = (error) => {
            console.log(`WebSocket error: ${error}`);
        };

        ws.onopen = () => {
            console.log(`Tendermint WebSocket opened to node: ${this.options.tendermintEndpoint} for context: ${context}`);
        }

        ws.onclose = () => {
            console.log("WebSocket closed");
        }

        this.options.tendermintEventHooks.forEach((eventHook) => {
            ws.send(JSON.stringify({
                "jsonrpc": "2.0",
                "method": "subscribe",
                "id": 0,
                "params": {
                    "query": `tm.event='${eventHook}'`
                }
            }));
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
        }
    }
}