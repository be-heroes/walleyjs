import { ICodeLinker } from "./ICodeLinker";

/** IWasmTransformer provides the base interface for a WasmTransformer in WalleyJS. */
export interface IWasmTransformer {    
    runtime: any;
    host: any;

    CanTransform(linker: ICodeLinker): boolean
    Transform(linker: ICodeLinker): Promise<ICodeLinker>
}