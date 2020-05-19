import { Connectors } from "web3-react";
import PortisApi from "@portis/web3";

const { InjectedConnector, PortisConnector } = Connectors;

const supportedNetworkURLs = {
  1: "https://mainnet.infura.io/v3/60ab76e16df54c808e50a79975b4779f",
  4: "https://rinkeby.infura.io/v3/60ab76e16df54c808e50a79975b4779f"
};

const defaultNetwork = 1;

const Injected = new InjectedConnector({
  supportedNetworks: [1, 4]
});

const Portis = new PortisConnector({
  api: PortisApi,
  dAppId: "211b48db-e8cc-4b68-82ad-bf781727ea9e",
  network: "mainnet"
});

export default {
  Injected,
  Portis
};
