/** IDataProvider interface provides a contract for a promise based function that can return an ArrayBuffer for "lazy loading" of data. */
export interface IDataProvider {
    (): Promise<ArrayBuffer>;
}