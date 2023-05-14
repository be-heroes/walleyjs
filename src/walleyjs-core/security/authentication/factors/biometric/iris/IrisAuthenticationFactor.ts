import {BiometricFactor} from "../BiometricFactor";
import {BiometricAuthenticationCredentials} from "../BiometricAuthenticationCredentials";
import * as Symbols from "../../Symbols";

export class IrisAuthenticationFactor extends BiometricFactor {
    constructor() {
        super(Symbols.irisFactor);
    }

    async authenticate(credentials: BiometricAuthenticationCredentials) {
        //TODO: Figure out if https://iris-cloud.com is still a thing
        return credentials != null;
    }
}