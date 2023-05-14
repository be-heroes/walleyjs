import { ICodeStream } from "./ICodeStream";
import { IDataProvider } from "../data/IDataProvider";
import { ICodeStreamManifest } from "./ICodeStreamManifest";

/** Default implementation of the ICodeStream interface. */
export class CodeStream implements ICodeStream
{
    constructor(public manifest: ICodeStreamManifest, public dataProvider: IDataProvider)
    {}
    
    GetData(): Promise<ArrayBuffer> {
        return this.dataProvider();
    }
}