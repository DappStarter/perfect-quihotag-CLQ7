require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog office skull dance birth shift pudding half knife blue solar'; 
let testAccounts = [
"0x566926c156a12a90b6585e2a80316889ee9b478d5f1852b305d171cb9ace5f2f",
"0xd221481dcab748216b8ae70ab4ac1670b7af89b1e85e6b3a7e1e2ca7545a8dac",
"0x5cf84bcd4813f4b3f59f64875e93f8695639d6b7bf8d3ee8331e981b1a55d982",
"0x7784744589d3e0932d5b84c00dca71dd80da2a1c9804816e5639164d11d489f3",
"0x63207f6fffb49f9e73d9aa142b0afb7fea33b8cb793386fbb1225d1721a9e8b6",
"0x875560bc888432e80034c1c0e4c2a0295fd0ec0a70bd7a8f8f54a744e30f93c0",
"0x4ac7b91828b0e914b2ffcd1712a831ea6946a4a3f019a267340ba7ccfd46ea7e",
"0xce7cac0f6352c085404f07315f0361c58aa47170bccc770a5e8244f56b8c53f7",
"0x8e3e1bd674333e07e21fd6e7dbf866fd5e15cc906d7cf9f30fd9cf5136da2f50",
"0x02e6ff817641ed72b69de4cc484df02abd3c0af1ce9469549dd8bbf486158a70"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


