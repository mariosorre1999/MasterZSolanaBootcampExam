import { Keypair } from "@solana/web3.js";


const keypair = Keypair.generate();

console.log("Public Key:",keypair.publicKey.toBase58()); //USuyvvQwAKuovvnj7QsA3ax59RrCZasustS9YWgqTAJ
console.log("Private Key:",keypair.secretKey.toString());
