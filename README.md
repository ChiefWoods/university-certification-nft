# University Certification NFT

NFT-issuing system for Solana Curriculum in [freeCodeCampWeb3](https://web3.freecodecamp.org/).

[Source Repository](https://github.com/ChiefWoods/university-certification-nft)

## Built With

### Languages

- [![JavaScript](https://img.shields.io/badge/Javascript-383936?style=for-the-badge&logo=javascript)](https://js.org/index.html)

### Libraries

- [Solana JavaScript SDK](https://solana-labs.github.io/solana-web3.js/)
- [Solana SPL Token](https://solana-labs.github.io/solana-program-library/token/js/index.html)
- [Metaplex JavaScript SDK](https://metaplex-foundation.github.io/js/index.html)

### Runtime

- [![Node.js](https://img.shields.io/badge/Node.js-233056?style=for-the-badge&logo=nodedotjs)](https://nodejs.org/en)

### Tools

- [![!Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-2c2c32?style=for-the-badge&logo=visual-studio-code&logoColor=007ACC)](https://code.visualstudio.com/)

## Getting Started

### Prerequisites

1. Update your Solana CLI and npm package to the latest version

```
solana-install update
```

```
npm install npm@latest -g
```

2. Set configuration to use localhost as cluster

```
solana config set --url localhost
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

4. Deploy program to local cluster

```
solana program deploy ./mlp_token.so --final
```

5. In another terminal, start local cluster with program pre-deployed

```
solana-test-validator --bpf-program metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s ./mlp_token.so --reset
```

6. Create keypairs

```
solana-keygen new -o solana-university-wallet.json
```

```
solana-keygen new -o student-1.json
```

```
solana-keygen new -o student-2.json
```

7. Set keypair for config

```
solana config set --keypair solana-university-wallet.json
```

8. Start server and client

```
npm run start:server
```

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