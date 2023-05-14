/** Symbols must natively be able to compile to LLVM, LLVM-IR or WASM to be useable in an ICodeStream */
/** Unique platform moniker for C#. */
export const typescriptMoniker = Symbol("TypeScript"); //https://sbip.sg/blog/tsllvm-part1/

export const cSharpMoniker = Symbol("C#"); //https://github.com/dotnet/LLVMSharp

/** Unique platform moniker for Java. */
export const javaMoniker = Symbol("Java"); //https://polyglot-compiler.github.io/JLang/

/** Unique platform moniker for Rust. */
export const rustMoniker = Symbol("Rust"); //https://crates.io/crates/llvm-ir

/** Unique platform moniker for WASM. */
export const wasmMoniker = Symbol("WASM"); //https://github.com/emscripten-core/emscripten

/** Unique platform moniker for CosmWasm. */
export const cosmWasmMoniker = Symbol("CosmWasm"); //https://github.com/CosmWasm/cosmwasm/tree/main/packages/vm