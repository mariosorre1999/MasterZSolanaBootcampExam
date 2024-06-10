import { Keypair, Connection, PublicKey } from "@solana/web3.js";

import wallet from "./wallet.json";

import { getOrCreateAssociatedTokenAccount, transfer } from "@solana/spl-token";

const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));
const connection = new Connection("https://api.devnet.solana.com", "finalized");

const mint = new PublicKey("CakiBH8KTz5bQ9jgr2PGdm7E4YRaXG7xJzdfefi8WeUY");
const fromAta = new PublicKey("CTtagWnjRdM5MZSJdHVVGTfFX7vY8nDnU4L1Y4rp6NYE");

const to = Keypair.generate();
console.log("To public Key", to.publicKey.toBase58()); //9vKJUnuPzqW1qTZ9EaCTFmYBHYWJFKQW2c8BJ82uZ5KF

(async () => {
    const tokenAccount = await getOrCreateAssociatedTokenAccount(connection, keypair, mint, to.publicKey);
    const toAta = tokenAccount.address;

    console.log("Associated Token Account:", toAta.toBase58()); //5jA65Q6maMqWhqsg77Rb3jL9oteovtNYynjDY2JHGnUi

    const amount = 1e6;
    await transfer(connection, keypair, fromAta, toAta, keypair, amount);

    console.log("Transfer", amount, "From", fromAta.toBase58(), "To", toAta.toBase58());
})();