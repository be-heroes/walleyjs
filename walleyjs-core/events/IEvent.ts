interface IEvent {
    id: string;
    version: string;
    payload: any;
    source: any;
}

export default IEvent;