import { SigningStargateClient, StargateClient } from "@cosmjs/stargate";
import { DirectSecp256k1HdWallet, EncodeObject } from "@cosmjs/proto-signing";

const mnemonic = "<your mnemonic>";
const rpcEndpoint = "https://symphony-rpc.kleomedes.network";
const prefix = "symphony";

async function getWalletFromMnemonic(): Promise<DirectSecp256k1HdWallet> {
  return await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
    prefix: prefix,
  });
}

function getMessage(signerAddress: string): EncodeObject {
  const message: EncodeObject = {
    typeUrl: "/osmosis.market.v1beta1.MsgSwap",
    value: {
      trader: signerAddress,
      ask_denom: "uusd",
      offer_coin: { denom: "note", amount: "1000000" },
    },
  };

  return message;
}

async function run() {
  const wallet = await getWalletFromMnemonic();
  const client = await SigningStargateClient.connectWithSigner(
    rpcEndpoint,
    wallet
  );

  const [{address: signerAddress}] = await wallet.getAccounts();
  const message = getMessage(signerAddress);

  const sendSwapResult = await client.signAndBroadcast(
    signerAddress,
    [message],
    {
      amount: [{ denom: 'note', amount: '1000000' }],
      gas: 'note',
    },
  );

  console.log("response", sendSwapResult);
}

run();