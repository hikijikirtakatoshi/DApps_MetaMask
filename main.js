let counterAbi = [
    {
        "constant": false,
        "inputs": [],
        "name": "increment",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getCounter",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
];

let counterSmartContractAddress = "0x530C96625B17cE527C2cb11d5202d289Ac651661";
let myAccount;
let counterContractInstance;
let myContract;

function initApp() {
    try {
        myContract = web3.eth.contract(counterAbi);
        counterContractInstance = myContract.at(counterSmartContractAddress);
        // myAccount = web3.eth.accounts[0];

    } catch (err) {
        console.log(err);
    }
}

window.incrementNumber = () => {
        counterContractInstance.increment(function(err, result) {
            if(!err) {
                console.log("ok", result);
            } else {
                console.log(err);
            }
        });
};

window.getNumber = () => {
    counterContractInstance.getCounter(function (err, result) {
        if (!err) {
            document.getElementById("number").innerText = result;
        } else {
            console.log("err");
        }
    });
};

window.addEventListener('load', async function () {

    if (typeof window.ethereum !== 'undefined' || typeof window.web3 !== "undefined") {

        let provider = web3.currentProvider;
        web3 = new Web3(provider);

        await provider.enable();

    } else {
        console.log("Metamaskが認識されません");
    }

    initApp();

});