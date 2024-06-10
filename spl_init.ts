import { Keypair, Connection } from "@solana/web3.js";

import { createMint } from "@solana/spl-token"

import wallet from "./wallet.json"; 

const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));
const connection = new Connection("https://api.devnet.solana.com", "finalized");

(async () => {
    const mint = await createMint(connection, keypair, keypair.publicKey, null, 6);
    console.log("Mint address:", mint.toBase58()); //CakiBH8KTz5bQ9jgr2PGdm7E4YRaXG7xJzdfefi8WeUY
})();