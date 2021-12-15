require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drip flock tooth guard render remember pudding hope clinic swift giggle'; 
let testAccounts = [
"0xef1cac8982226eaa0e4d3ca0400e18db7cbcaa0f26a52e6d6424fcb1df3239b2",
"0x45433c8564c66cde73e4561d2bd5baa4a9a56ff2e8e7915ed691e8ed7ba8b433",
"0xb6b0ca52699199f0425dbe2bfae6b5b245a2adb62ccbeb448b2eee5023791f8e",
"0x32dad6a90877a12920ff0a3341cf2da86bac2df694e75ff968c5160b09bdda22",
"0xeb18d2f9f455af2ac02b8ced9958772c0de573c2c6c6c27dc098d4d4b82b9a8c",
"0xf9de0f7e809c233824a94552ffe405b60f52019cdc108ccdba9521ae1c73774f",
"0xe9528efc4c7ce7b561ca986944b1404b6fda60408378879bbd9c84921f190d7a",
"0xe6a45d541fb463ce05d58b8334f849101f83ea9f2b49a1fa9dd237085b10e2a7",
"0x579aaa1dc32890c9596a1d7279faaac638cad8aee8c2a10f7b13ac71e1829404",
"0x4be2cf62b21f1f92282b09ffcb0ebb7a2c7983b9f3862c8549ba8a4b0c8d0f79"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

