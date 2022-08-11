import IEvent from "./IEvent";

interface IPublisher {
    publish(event: IEvent): Promise<boolean>;
}

export default IPublisher;