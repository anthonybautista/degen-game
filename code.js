// Enter Contract ABI below (don't change if using Smolrun's Locked Free Mint Contract!)
const NFT = '[{"inputs":[{"internalType":"uint64","name":"subscriptionId","type":"uint64"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"have","type":"address"},{"internalType":"address","name":"want","type":"address"}],"name":"OnlyCoordinatorCanFulfill","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyRefund","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"ownerRevoke","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"bytes","name":"","type":"bytes"}],"name":"performUpkeep","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"requestId","type":"uint256"},{"internalType":"uint256[]","name":"randomWords","type":"uint256[]"}],"name":"rawFulfillRandomWords","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint32","name":"_newAmount","type":"uint32"}],"name":"setCallbackGasLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_newKeyHash","type":"bytes32"}],"name":"setKeyHash","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newAddress","type":"address"}],"name":"setSub","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint64","name":"_newAmount","type":"uint64"}],"name":"setSubId","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes","name":"","type":"bytes"}],"name":"checkUpkeep","outputs":[{"internalType":"bool","name":"upkeepNeeded","type":"bool"},{"internalType":"bytes","name":"performData","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"degens","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"requestCounter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"reservedAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"subscriptionAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]';
// Enter Contract Address Below
const NFT_ADDRESS = "0x0e8cA5808AB877ef16edfc33cC0d573E5B44b769";
let provider, signer, currentNetwork, connectedContract;
let account;

// comment below block for Fuji Testnet

const defaultNetwork = "0xa86a",
    { ethereum: ethereum } = window,
    networks = { "0xa86a": { chainId: "0xa86a", chainName: "Avalanche", nativeCurrency: { decimals: 18, symbol: "AVAX" }, rpcUrls: ["https://api.avax.network/ext/bc/C/rpc"], blockExplorerUrls: ["https://snowtrace.io"] } };
const RPC = 'https://api.avax.network/ext/bc/C/rpc';
const explorer = 'https://snowtrace.io/tx/';

// comment below block for Avalanche Mainnet
/*
const defaultNetwork = "0xa869",
    { ethereum: ethereum } = window,
    networks = { "0xa869": { chainId: "0xa869", chainName: "Fuji", nativeCurrency: { decimals: 18, symbol: "AVAX" }, rpcUrls: ["https://api.avax-test.network/ext/bc/C/rpc"], blockExplorerUrls: ["https://testnet.snowtrace.io"] } };
const RPC = 'https://api.avax-test.network/ext/bc/C/rpc';
const explorer = 'https://testnet.snowtrace.io/tx/';
*/

// Much of the below Web3 connection code borrowed from ftso.alexdupre.com
// If you are using Flare or Songbird network I highly recommend delegating to his FTSO
async function checkWeb3() {
    if (void 0 !== window.ethereum) {
        console.log("Web3 provider is installed!"); (provider = new ethers.providers.Web3Provider(window.ethereum)), (signer = provider.getSigner());
        try {
            account = await signer.getAddress();
            await checkNetwork();
            await checkAccount();
            $("button#connect").html("Connected").css("background", "red");
            $("button#connect").prop("disabled", !0);
            await getOwned(account);
        } catch (t) {
            console.log(t);
        }
    } else console.log("Please install MetaMask or another web3 provider!"), alert("Please install MetaMask or another web3 provider!");
}

async function connect() {
    console.log("Connecting..."), $("p#mintError").text(""), $("button#connect").prop("disabled", !0);
    try {
        await ethereum.request({ method: "eth_requestAccounts" });
        await checkNetwork();
        await checkAccount();
        console.log("Connected.");
        $("button#connect").html("Connected").css("background", "red");
    } catch (t) {
        $("button#connect").prop("disabled", !1), 4001 === t.code ? console.log("Please connect to MetaMask.") : console.error(t), $("p#mintError").text(`${t}`);
    }
}

async function checkNetwork() {
    ethereum.on("chainChanged", handleChainChanged);
    let t = await ethereum.request({ method: "eth_chainId" });
    void 0 !== networks[t]
        ? (currentNetwork = networks[t])
        : ethereum.isMetaMask
            ? (await setupNetwork(defaultNetwork), t === (await ethereum.request({ method: "eth_chainId" })) && console.log("Please switch to one of the supported networks."))
            : console.log("Please switch to one of the supported networks.");
}

async function checkAccount() {
    await ethereum.request({ method: "eth_accounts" });
    ethereum.on("accountsChanged", handleAccountsChanged);
}

async function setupNetwork(t) {
    try {
        await ethereum.request({ method: "wallet_switchEthereumChain", params: [{ chainId: networks[t].chainId }] });
    } catch (e) {
        if (4902 === e.code)
            try {
                await ethereum.request({ method: "wallet_addEthereumChain", params: [networks[t]] });
            } catch (t) {
                4001 === t.code ? console.log("Please approve the Avalanche network.") : console.error(t);
            }
        else 4001 === e.code ? console.log("Avalanche configuration already present.") : console.error(e);
    }
    (provider = new ethers.providers.Web3Provider(window.ethereum)), (signer = provider.getSigner());
}

async function handleChainChanged(t) {
    console.log("Chain changed to " + t),
        $("p#mintError").text(""),
        (currentNetwork = networks[t]),
        (provider = new ethers.providers.Web3Provider(window.ethereum)),
        (signer = provider.getSigner()),
    void 0 !== currentNetwork || (console.log("Please switch to one of the supported networks."), $("p#mintError").text("Wrong Network"));
}

async function handleAccountsChanged(t) {
    console.log("Account changed to " + t), t.length;
}

// getMinted function used to get # of NFTs already minted.
// change number to correct max supply
const getMinted = async () => {
        const t = new ethers.providers.JsonRpcProvider(RPC);
        connectedContract = new ethers.Contract(NFT_ADDRESS, NFT, t);
        let minted = await connectedContract.totalSupply();
        $("span#nftsMinted").text(`${minted}`);

        // change number below to your max supply
        if (minted === 999) {
            $("button#mintNft").prop("disabled", !0);
        }
}

// Get # owned
const getOwned = async () => {
    signer = provider.getSigner()
    connectedContract = new ethers.Contract(NFT_ADDRESS, NFT, signer);
    try {
        if (ethereum) {
            let owned = await connectedContract.balanceOf(account);
            $("span#owned").text(owned);
        } else console.log("Ethereum object doesn't exist!");
    } catch (e) {
        console.log(e);
    }
};

// Mint function
const mintNft = async () => {
    signer = provider.getSigner()
    connectedContract = new ethers.Contract(NFT_ADDRESS, NFT, signer);
        try {
            if (ethereum) {
                $("p#mintError").text("");
                let tx = await connectedContract.mint({ value: ethers.utils.parseEther("0.1")});
                $("p#mintError").text("Minting...");
                await tx.wait();
                let txLink = `<a href='${explorer}${tx.hash}' target="_blank" rel="noreferrer">\n                                  View Transaction</a>`;
                $("p#mintError").html(`Successfully minted: ${txLink}`);
                getMinted();
                getOwned();
            } else console.log("Ethereum object doesn't exist!"), $("p#mintError").text("Connect wallet and refresh!");
        } catch (e) {
            console.log(e), $("p#mintError").text(`${e.data.message}`);
        }
};

$(function () {
    getMinted();
    $("button#connect")
        .off()
        .on("click", function (t) {
            t.preventDefault(), connect();
    });
    $("button#mintButton")
        .off()
        .on("click", function (t) {
            t.preventDefault(), mintNft();
    });
    checkWeb3();
});