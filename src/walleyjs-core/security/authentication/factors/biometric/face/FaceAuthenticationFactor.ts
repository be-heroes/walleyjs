import {BiometricFactor} from "../BiometricFactor";
import {BiometricAuthenticationCredentials} from "../BiometricAuthenticationCredentials";
import * as Symbols from "../../Symbols";

export class FaceAuthenticationFactor extends BiometricFactor {
    constructor() {
        super(Symbols.faceFactor);
    }

    async authenticate(credentials: BiometricAuthenticationCredentials) {        
        return credentials != null;
    }
}