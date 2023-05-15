import EventCallback from "../events/EventCallback";
import { IWasmModulePointer } from "./IWasmModulePointer";

/** ICodeStreamWatcher provides the base interface for a CodeStreamWatcher in WalleyJS. */
export interface ICodeStreamWatcher {    
    state: any; //Initializing, Running, Disposed
    
    Register(callback: EventCallback) : Promise<boolean>
    Broadcast(pointer: IWasmModulePointer) : Promise<boolean>
}