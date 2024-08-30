import { AminoTypes, SigningStargateClient, defaultRegistryTypes } from "@cosmjs/stargate";
import { DirectSecp256k1HdWallet, EncodeObject, Registry } from "@cosmjs/proto-signing";
import { osmosis } from './codegen';

const mnemonic = "<mnemonic>";
const rpcEndpoint = "https://symphony-rpc.kleomedes.network";
const prefix = "symphony";

async function getWalletFromMnemonic(): Promise<DirectSecp256k1HdWallet> {
  return await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
    prefix: prefix,
  });
}

function getMessage(signerAddress: string): EncodeObject {
  const message: EncodeObject = {
    typeUrl: "/osmosis.market.v1beta1.MsgSwapSend",
    value: {
      fromAddress: signerAddress,
      toAddress: signerAddress,
      offerCoin: { denom: "note", amount: "1000000" },
      askDenom: "uusd"
    },
  };
  console.log("message", message);
  return message;
}

async function run() {
  const registry = new Registry(defaultRegistryTypes);
  const aminoTypes = new AminoTypes({
    ...osmosis.market.v1beta1.AminoConverter
  });
  osmosis.market.v1beta1.load(registry);

  const wallet = await getWalletFromMnemonic();
  const client = await SigningStargateClient.connectWithSigner(
    rpcEndpoint,
    wallet,
    { registry, aminoTypes }
  );

  const [{address: signerAddress}] = await wallet.getAccounts();
  const message = getMessage(signerAddress);

  const sendSwapResult = await client.signAndBroadcast(
    signerAddress,
    [message],
    {
      amount: [{ denom: 'note', amount: '1000000' }],
      gas: "100000",
    },
  );

  console.log("response", sendSwapResult);
}

run();