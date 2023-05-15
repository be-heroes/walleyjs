/** IWasmModulePointer provides the base interface for a WasmModulePointer in WalleyJS. */
export interface IWasmModulePointer {    
    pointer: any;

    GetWasmExports() : Promise<string[]>
    ExecuteWasmExport(wasmExport: string, wasmExportArgs: string[]) : Promise<JSON>
}