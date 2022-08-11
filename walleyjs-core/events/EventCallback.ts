import IEvent from "./IEvent";

type EventCallback = (event: IEvent) => Promise<boolean>;

export default EventCallback;