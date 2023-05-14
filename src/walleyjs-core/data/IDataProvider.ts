/** IDataProvider interface provides a contract for a promise based function that can return data "on-demand" thus allowing "lazy loading" of data. */
export interface IDataProvider {
    (): Promise<any>;
}