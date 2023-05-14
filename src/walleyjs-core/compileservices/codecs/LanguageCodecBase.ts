
import {ILanguageCodec} from "../ILanguageCodec";
import {ICodeStream} from "../ICodeStream";

/** Abstract implementation of the ILanguageCodex contract. */
export abstract class LanguageCodecBase implements ILanguageCodec
{
    constructor(public moniker: symbol, public transpilationTargets?: Array<ILanguageCodec>) {}

    public abstract encode(codeStream: ICodeStream): ArrayBuffer;
    public abstract decode(byteCode: ArrayBuffer): ICodeStream;
}