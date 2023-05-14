/**Defines the pre-defined types of rights that can be associated with a IClaim.*/
export interface IRights {
    /**Gets a string that specifies that the right represents an identity.*/
    identity: string;

    /**Gets a string that specifies that the right represents a property that the IUser associated with a IClaim possesses.*/
    possessProperty: string;
}