import { Connectors } from "web3-react";
import PortisApi from "@portis/web3";

const { InjectedConnector, PortisConnector } = Connectors;

const supportedNetworkURLs = {
  42: "https://kovan.infura.io/v3/60ab76e16df54c808e50a79975b4779f"
};

const defaultNetwork = 42;

const Injected = new InjectedConnector({
  supportedNetworks: [42]
});

const Portis = new PortisConnector({
  api: PortisApi,
  dAppId: "e968e6c4-1e6d-4eb9-93c8-60a6f2c49fdb",
  network: "kovan"
});

export default {
  Injected,
  Portis
};
