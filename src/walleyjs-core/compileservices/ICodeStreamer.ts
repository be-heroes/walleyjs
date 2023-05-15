import { IWasmTransformer } from "./IWasmTransformer";
import { ICodeConverter } from "./ICodeConverter";
import { ICodeStreamWatcher } from "./ICodeStreamWatcher";

/** ICodeStreamer provides the base interface for a CodeStreamer in WalleyJS. */
export interface ICodeStreamer {    
    transformer: IWasmTransformer;
    converter: ICodeConverter;
    
    CanStream(source: string, args: string[]): Promise<boolean>
    Stream(source: string, args: string[]): Promise<ICodeStreamWatcher>
}