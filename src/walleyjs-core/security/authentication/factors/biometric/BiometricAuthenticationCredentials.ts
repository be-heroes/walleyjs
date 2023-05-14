import {IBiometricPayload} from "./IBiometricPayload";
import {Credentials} from "../../../Credentials";
import {IUser} from "../../../identity/IUser";

export class BiometricAuthenticationCredentials extends Credentials {
    constructor(user: IUser, public payloads: WeakMap<Symbol, IBiometricPayload>) {
        super(user);
    }
}