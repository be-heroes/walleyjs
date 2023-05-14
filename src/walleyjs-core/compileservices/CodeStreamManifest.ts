import {ICodeStreamManifest} from "./ICodeStreamManifest";
import {Guid} from "../primitives/Guid";

/** Default implementation of the ICodeStreamManifest interface. */
export class CodeStreamManifest implements ICodeStreamManifest
{
    constructor(public moniker: symbol, public id: Guid, public headers: Record<string, string>[]) { }

    GetSignature(): Promise<ArrayBuffer> {
        throw new Error("Method not implemented.");
    }
}