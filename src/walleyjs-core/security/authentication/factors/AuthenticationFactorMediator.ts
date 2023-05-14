import {ICredentials} from "../../ICredentials";
import {IAuthenticationFactorMediator} from "./IAuthenticationFactorMediator";
import {IAuthenticationFactor} from "./IAuthenticationFactor";

export class AuthenticationFactorMediator implements IAuthenticationFactorMediator{
    constructor(public factors: Array<IAuthenticationFactor>)
    {
    }

    async authenticate(credentials: ICredentials)
    {
        let factorResults = new WeakMap<IAuthenticationFactor, any>();

        this.factors.forEach(async (item) =>
        {
            factorResults.set(item, await item.authenticate(credentials));
        });

        return factorResults;
    }
}