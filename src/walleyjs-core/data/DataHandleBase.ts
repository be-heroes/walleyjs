import { IDataHandle } from "./IDataHandle";
import { IDataProvider } from "./IDataProvider";

/**Abstract representation of a DataHandle in WalleyJS. */
export abstract class DataHandleBase implements IDataHandle
{
     /**Default constructor requires a IDataProvider to act as a tether for the data source backing the data handle. */
    constructor(public dataProvider: IDataProvider) {
            
    }
}