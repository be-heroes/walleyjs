import {IClaimType} from "./IClaimType";

/**Represents a claim that is associated with an IUser.*/
export interface IClaim {
    /**Identifies the claim type*/
    type: IClaimType;

    /**A function that can compare two IClaim objects for equality.*/
    defaultComparer: (obj1: IClaim, obj2: IClaim) => boolean;

    /**Gets the resource with which this Claim object is associated.*/
    resource: any;

    /**A string representation of a uniform resource identifier (URI) that specifies the right associated with this Claim object.*/
    right: string;
}