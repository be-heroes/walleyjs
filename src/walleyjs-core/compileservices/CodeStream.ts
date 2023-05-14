//TODO: Streamline with new architecture
import {ICodeStreamManifest} from "./ICodeStreamManifest";
import {ICodeStream} from "./ICodeStream";
import {IDataProvider} from "../data/IDataProvider";
import {DataHandleBase} from "../data/DataHandleBase";

/**Default implementation of the ICodeStream contract. */
export class CodeStream extends DataHandleBase implements ICodeStream
{
    constructor(public manifest: ICodeStreamManifest, public children: ICodeStream[], public dataProvider: IDataProvider)
    {
        super(dataProvider);
    }
}