//TODO: Streamline with new architecture
import {Guid} from "../primitives/Guid";

/** ICodeStreamManifest provides a metadata container for ICodeStream objects that can help other compileservice members
determine a codeStream objects source language (via moniker) and initialization arguments (via args). */
export interface ICodeStreamManifest
{
    /**Moniker references the ILanguageCodex used to encode a given codeStream. Symbol values are contained in the CompileServices namespace (Symbols.ts) */
    moniker: symbol;

    /**Unique GUID used to identify a manifest. */
    id: Guid;

    /**Args passed to the ICodeRunner when initializing the WASM module container for a given codeStream */
    args: any;
}