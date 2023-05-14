import {BiometricFactor} from "../BiometricFactor";
import {BiometricAuthenticationCredentials} from "../BiometricAuthenticationCredentials";
import * as Symbols from "../../Symbols";

export class SpeechAuthenticationFactor extends BiometricFactor {
    constructor()
    {        
        //TODO: Figure out where MS put project oxford
        super(Symbols.speechFactor);
    }

    async authenticate(credentials: BiometricAuthenticationCredentials)
    {
        return credentials != null;
    }
}