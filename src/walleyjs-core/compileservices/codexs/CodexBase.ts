
import {ILanguageCodex} from "../ILanguageCodex";
import {ICodeStream} from "../ICodeStream";
import {CodeStream} from "../CodeStream";
import {CodeStreamManifest} from "../CodeStreamManifest";
import {IDataProvider} from "../../data/IDataProvider";
import * as Symbols from "../Symbols";

/**Abstract implementation of the ILanguageCodex contract. */
export abstract class CodexBase implements ILanguageCodex
{
    constructor(public moniker: symbol, public sourceMappings?: Array<ILanguageCodex>) {}

    async encode(codeStream: ICodeStream, target: ILanguageCodex): Promise<ICodeStream> {
        if (!this.isCompatible(codeStream))
            throw new Error("Unsupported code stream");

        return await this.transpile(codeStream, target);
    };

    async decode(codeStream: ICodeStream): Promise<Blob> {
        if (!this.isCompatible(codeStream))
            throw new Error("Unsupported code stream");

        return await this.compile(codeStream);
    }

    protected async transpile(codeStream: ICodeStream, target: ILanguageCodex): Promise<ICodeStream>
    {
        const manifest = new CodeStreamManifest(target.moniker, codeStream.manifest.id, codeStream.manifest.args);
        const children = new Array<ICodeStream>();
        let dataProvider: IDataProvider;

        switch (target.moniker) {
            case Symbols.wasmMoniker:
                dataProvider = async () => {
                    return await this.compile(codeStream);
                }

                for (let childStream of codeStream.children) {
                    children.push(await this.transpile(childStream, target));
                }

                return new CodeStream(manifest, children, dataProvider);
        }

        throw new Error("Unsupported transpilation target")
    }

    protected abstract compile(codeStream: ICodeStream): Promise<Blob>;
        
    protected isCompatible(codeStream: ICodeStream): boolean {
        return codeStream.manifest.moniker !== this.moniker;
    }
}