import { ICodeStream } from "./ICodeStream";

/** ICodeLinker provides the base interface for a CodeLinker in WalleyJS. */
export interface ICodeLinker {    
    source: string;
    flags: string[];

    GetStream() : Promise<ICodeStream>
    GetDependencies() : Promise<ICodeLinker>
}