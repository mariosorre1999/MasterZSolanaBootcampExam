import { Keypair, Connection, LAMPORTS_PER_SOL } from "@solana/web3.js";
import wallet from "./wallet.json";

const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));
const connection = new Connection("https://api.devnet.solana.com", "finalized");

(async () => {
  try {
    
    const Signature = await connection.requestAirdrop(
      keypair.publicKey,
      1 * LAMPORTS_PER_SOL
    );
    console.log(`Success! Check out your TX here: https://explorer.solana.com/tx/${Signature}?cluster=devnet`); //https://explorer.solana.com/tx/5ASSSjyLDiY5M91brYDE3zV6rg39ka8kV6G6rLb3mrXiPBvBDmQKnZVxkCNtRNu3CbhNTc7e3ywjSkhA6W8GX8FT?cluster=devnet

  } catch (error) {
    console.log("Error during Airdrop", error);
  }
})();