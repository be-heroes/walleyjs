//TODO: Streamline with new architecture
import {IDataHandle} from "../data/IDataHandle";
import {ICodeStreamManifest} from "./ICodeStreamManifest";

/**ICodeStream provides a contract for a codeStream implementation in the SentinelJS platform. */
export interface ICodeStream extends IDataHandle {
    /**manifest provides access to the codeStreams manifest (metadata container).*/
    manifest: ICodeStreamManifest;
    
    /**children provides access to nested child streams allowing "complex execution graphs" to be loaded.*/
    children: ICodeStream[];
}