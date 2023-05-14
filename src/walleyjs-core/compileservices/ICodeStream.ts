import {IDataHandle} from "../data/IDataHandle";
import {ICodeStreamManifest} from "./ICodeStreamManifest";

/** ICodeStream provides the base interface for a CodeStream in WalleyJS. */
export interface ICodeStream extends IDataHandle {    
    manifest: ICodeStreamManifest;
    
    GetData(): Promise<ArrayBuffer>
}