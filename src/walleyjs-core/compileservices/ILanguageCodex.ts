//TODO: Streamline with new architecture
import {ICodeStream} from "./ICodeStream";

/**ILanguageCodex provides a contract for codeStream codices in the SentinelJS platform. */
export interface ILanguageCodex {
    /**Moniker supported by a given ILanguageCodex */
    moniker: symbol;

    /**SourceMappings provide information about supported ILanguageCodex encoding targets. */
    sourceMappings?: Array<ILanguageCodex>;

    /**
     * Encodes (transpiles) a codeStream to a given ILanguageCodex.
     * @param codeStream Reference to the supplied codeStream that is being re-encoded.
     * @param target Identifies the re-encoding ILanguageCodex target for the supplied codeStream.
     */
    encode(codeStream: ICodeStream, target: ILanguageCodex): Promise<ICodeStream>;

    /**
     * Decode (compiles) a codeStream and returns a Blob object containing a WASM module.
     * @param codeStream Reference to the supplied codeStream that is being re-encoded.
     */
    decode(codeStream: ICodeStream): Promise<Blob>;
}