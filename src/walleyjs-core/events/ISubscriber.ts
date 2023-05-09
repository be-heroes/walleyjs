import EventCallback from "./EventCallback";

interface ISubscriber{
    subscribe(callback: EventCallback): Promise<boolean>;
}

export default ISubscriber;
