import { ILanguageCodec } from "./ILanguageCodec";
import { ICodeLinker } from "./ICodeLinker";

/** ICodeConverter provides the base interface for a CodeConverter in WalleyJS. */
export interface ICodeConverter {    
    moniker: symbol;
    codecs: ILanguageCodec[];

    CanConvert(linker: ICodeLinker, codec: ILanguageCodec): boolean
    Convert(linker: ICodeLinker, codec: ILanguageCodec): Promise<ICodeLinker>
}