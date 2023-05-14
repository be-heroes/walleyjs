import {Guid} from "../primitives/Guid";

/** ICodeStreamManifest provides a metadata container for ICodeStreams. */
export interface ICodeStreamManifest
{
    /** Moniker references the ILanguageCodex used to encode a given CodeStream. Symbol values are contained in the CompileServices namespace (Symbols.ts) */
    moniker: symbol;

    /** Unique GUID used to identify a ICodeStream. */
    id: Guid;

    /** Headers used by the ICodeStream for initialization and verification */
    headers: Record<string, string>[];
    
    /** Used to get the cryptographic signature for a given code stream */
    GetSignature(): Promise<ArrayBuffer>
}