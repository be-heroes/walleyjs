import {IClaim} from "./IClaim";
import {IClaimType} from "./IClaimType";
import {IRights} from "./IRights";
import {IUser} from "../identity/IUser";

/**Represents the collection of claims that are associated with an IUser.*/
export interface IClaimSet extends Array<IClaim> {
    /** Reference to the IUser that issued this ClaimSet.*/
    issuer: IUser;

    /** Finds claims that match claim type and rights.*/
    findClaims(type: IClaimType, right: IRights): Array<IClaim>;
}