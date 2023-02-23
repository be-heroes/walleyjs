import IOptions from "./options/IOptions";
import IPlugin from "./plugins/IPlugin";

export default class MinionOptions implements IOptions {
    identifier: string | undefined;    
    plugins: IPlugin[] | undefined;

    protected constructor(identifier: string, plugins: IPlugin[] | undefined) {
        this.identifier = identifier;
        this.plugins = plugins;
    }
}