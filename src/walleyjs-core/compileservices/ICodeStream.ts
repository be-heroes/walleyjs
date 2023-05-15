import {ICodeStreamManifest} from "./ICodeStreamManifest";

/** ICodeStream provides the base interface for a CodeStream in WalleyJS. */
export interface ICodeStream {    
    manifest: ICodeStreamManifest;
    
    GetData(): Promise<ArrayBuffer>
    GetSignature(): Promise<ArrayBuffer>
}