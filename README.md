# University Certification NFT

NFT-issuing system for Solana Curriculum in [freeCodeCampWeb3](https://web3.freecodecamp.org/).

[Live Website](https://chiefwoods.github.io/university-certification-nft/)

[Source Repository](https://github.com/ChiefWoods/university-certification-nft)

## Built With

### Languages

- [![JavaScript](https://img.shields.io/badge/Javascript-383936?style=for-the-badge&logo=javascript)](https://js.org/index.html)

### Libraries

- [@solana/web3.js](https://solana-labs.github.io/solana-web3.js/)
- [@solana/spl-token](https://solana-labs.github.io/solana-program-library/token/js/index.html)
- [@metaplex-foundation/js](https://metaplex-foundation.github.io/js/index.html)

### Runtime

- [![Node.js](https://img.shields.io/badge/Node.js-233056?style=for-the-badge&logo=nodedotjs)](https://nodejs.org/en)

### Tools

- [![!Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-2c2c32?style=for-the-badge&logo=visual-studio-code&logoColor=007ACC)](https://code.visualstudio.com/)

## Getting Started

### Prerequisites

1. Update your Solana CLI and npm package to the latest version

```
solana-install update
npm install npm@latest -g
```

### Setup

1. Clone the repository

```
git clone https://github.com/ChiefWoods/university-certification-nft.git
```

2. Install all dependencies

```
npm install
```

3. Create dump of Metaplex Token Program

```
solana program dump --url mainnet-beta metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s ./mlp_token.so
```

4. In another terminal, start validator with program pre-deployed

```
solana-test-validator --bpf-program metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s ./mlp_token.so --reset
```

5. Generate keypairs

```
solana-keygen new -o solana-university-wallet.json
solana-keygen new -o student-1.json
solana-keygen new -o student-2.json
```

6. Set configuration to use localhost

```
solana config set -u l
```

7. Airdrop some SOL to account

```
solana airdrop 5 -k solana-university-wallet.json
solana airdrop 5 -k student-1.json
solana airdrop 5 -k student-2.json
```

8. Start Node server

```
npm run start:server
```

9. In another terminal, start Vite client

```
npm run start:client
```

## Issues

View the [open issues](https://github.com/ChiefWoods/university-certification-nft/issues) for a full list of proposed features and known bugs.

## Acknowledgements

### Resources

- [Shields.io](https://shields.io/)

## Contact

[chii.yuen@hotmail.com](mailto:chii.yuen@hotmail.com)