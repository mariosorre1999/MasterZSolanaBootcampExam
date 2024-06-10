import { Keypair, Connection, PublicKey } from "@solana/web3.js";
import { mintTo, getOrCreateAssociatedTokenAccount } from "@solana/spl-token";

import wallet from "./wallet.json";

const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));
const connection = new Connection("https://api.devnet.solana.com", "finalized");
const mint = new PublicKey("CakiBH8KTz5bQ9jgr2PGdm7E4YRaXG7xJzdfefi8WeUY");

(async () => {
    const tokenAccount = await getOrCreateAssociatedTokenAccount(connection, keypair, mint, keypair.publicKey);
    const Amount = 10e6;
    const ata = tokenAccount.address;
    console.log("Token Account associated:", ata.toBase58()); //CTtagWnjRdM5MZSJdHVVGTfFX7vY8nDnU4L1Y4rp6NYE

    await mintTo(connection, keypair, mint, ata, keypair.publicKey, Amount);
    console.log("Minted", Amount, "To", ata.toBase58());
})();