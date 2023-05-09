import IOptions from "@zaradarbh/walleyjs-core/lib/options/IOptions";

export default class TendermintEventSubscriberOptions implements IOptions {
    tendermintEndpoint: string = "ws://localhost:26657/websocket";
    tendermintEventHooks: Array<string> = ["NewBlock", "NewBlockHeader", "NewEvidence", "Tx", "ValidatorSetUpdates", "CompleteProposal", "Vote"];
}