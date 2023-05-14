﻿import { IDataProvider } from "./IDataProvider";

/** IDataHandle interface provides a contract for a "read-only" data source in the SentinelJS platform. */
export interface IDataHandle {
    dataProvider: IDataProvider;
}

