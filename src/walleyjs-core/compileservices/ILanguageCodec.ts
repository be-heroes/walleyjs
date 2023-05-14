import { ICodeStream } from "./ICodeStream";

/** ILanguageCodec provides a contract for codices used to encode/decode ICodeStream instances. */
export interface ILanguageCodec {
    /** Moniker supported by a given ILanguageCodec. */
    moniker: symbol;

    /** transpilationTargets provide information about supported ILanguageCodec transpilation targets. */
    transpilationTargets?: Array<ILanguageCodec>;

    /** Encodes a codeStream into an ArrayBuffer or throws an error. */
    encode(codeStream: ICodeStream): ArrayBuffer;

    /** Decode a byte[] array into a ICodeStream that supports this ILanguageCodex or throws an error. */
    decode(data: ArrayBuffer): ICodeStream;
}