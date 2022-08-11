import EventCallback from "./EventCallback";

interface ISubscriber{
    subscribe(callback: EventCallback): boolean;
}

export default ISubscriber;
