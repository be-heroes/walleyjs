//TODO: Streamline with new architecture
import {ICodeStreamManifest} from "./ICodeStreamManifest";
import {Guid} from "../primitives/Guid";

/**Default implementation of the ICodeStreamManifest contract. */
export class CodeStreamManifest implements ICodeStreamManifest
{
    constructor(public moniker: symbol, public id: Guid, public args: any) { }
}