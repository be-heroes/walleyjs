import {IUser} from "./identity/IUser";
import {ICredentials} from "./ICredentials";

export class Credentials implements ICredentials
{
    constructor(public user: IUser)
    {
    }
}