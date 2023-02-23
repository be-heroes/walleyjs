import EventCallback from "@zaradarbh/walleyjs-core/lib/events/EventCallback";
import ISubscriber from "@zaradarbh/walleyjs-core/lib/events/ISubscriber";
import TendermintEventSubscriberOptions from "./TendermintEventSubscriberOptions";

export default class TendermintEventSubscriber implements ISubscriber, EventListenerObject {
    private readonly callbacks: Array<EventCallback> = new Array<EventCallback>();
    private readonly options: TendermintEventSubscriberOptions;
    
    get tendermintEndpoint(): string | undefined {
        if (this.options !== undefined) {
            return this.options.tendermintEndpoint;
        }

        return undefined;
    }

    constructor(options: TendermintEventSubscriberOptions) {
        this.options = options;

        //TODO: Tendermint websocket client
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
        }
    }
}