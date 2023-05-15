import {BiometricFactor} from "../BiometricFactor";
import {BiometricAuthenticationCredentials} from "../BiometricAuthenticationCredentials";
import * as Symbols from "../../Symbols";

//TODO: Check out https://learn.microsoft.com/en-in/azure/cognitive-services/computer-vision/overview-identity
export class FaceAuthenticationFactor extends BiometricFactor {
    constructor() {
        super(Symbols.faceFactor);
    }

    async authenticate(credentials: BiometricAuthenticationCredentials) {        
        return credentials != null;
    }
}