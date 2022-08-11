import IPlugin from "./plugins/IPlugin";

interface IMinionOptions {
    identifier: string;
    plugins?: IPlugin[];
}

export default IMinionOptions;