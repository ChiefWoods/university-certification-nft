import { Connection, Keypair } from "@solana/web3.js";
import { createMint, getOrCreateAssociatedTokenAccount, TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { Metaplex, keypairIdentity } from "@metaplex-foundation/js";
import { localStorage } from "./utils.js";
import fs from "fs";

const walletArr = JSON.parse(fs.readFileSync('./build-a-university-certification-nft/solana-university-wallet.json', 'utf8'));
const walletKeypair = Keypair.fromSecretKey(new Uint8Array(walletArr));
const connection = new Connection('http://127.0.0.1:8899', 'confirmed');
const metaplex = Metaplex
  .make(connection)
  .use(keypairIdentity(walletKeypair))
  .use(localStorage({ baseUrl: 'http://127.0.0.1:3002' }));

export async function uploadFile({ metaplexFile, payer }) {
  const image = await metaplex.storage().upload(metaplexFile);
  const { uri } = await metaplex.nfts().uploadMetadata(
    {
      name: metaplexFile.fileName,
      image
    },
    {
      payer,
    });

  return uri;
}

export async function createMintAccount({ payer }) {
  const mint = await createMint(connection, payer, payer.publicKey, payer.publicKey, 0);

  console.log('Mint: ', mint.toBase58());

  return mint;
}

export async function getMintAccounts({ payer }) {
  const mintAccounts = await connection.getParsedProgramAccounts(
    TOKEN_PROGRAM_ID,
    {
      filters: [
        {
          dataSize: 82
        },
        {
          memcmp: {
            offset: 4,
            bytes: payer.publicKey.toBase58()
          }
        }
      ]
    }
  );

  return mintAccounts;
}

export async function createTokenAccount({ payer, mintAddress, ownerAddress }) {
  const tokenAccount = await getOrCreateAssociatedTokenAccount(connection, payer, mintAddress, ownerAddress);

  console.log('Token account: ', tokenAccount.address.toBase58());

  return tokenAccount;
}

export async function mintToken({ payer, mintAddress, ownerAddress, year, uri }) {
  const { nft } = await metaplex.nfts().create(
    {
      uri,
      name: `SOL-${year}`,
      sellerFeeBasisPoints: 0,
      symbol: 'SOLU',
      isMutable: false,
      tokenOwner: ownerAddress,
      updateAuthority: payer,
      mintAuthority: payer,
      useExistingMint: mintAddress,
      maxSupply: 1,
    },
    {
      payer,
    }
  );

  return nft;
}

export async function getNFTs({ ownerAddress }) {
  return await metaplex.nfts().findAllByOwner({
    owner: ownerAddress
  });
}