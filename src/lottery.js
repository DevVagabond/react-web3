import web3 from './web3';
// import Web3 from 'web3';

const address = '0xb7DF67026CB290DCa97C942Af5E41b947B9d1e9E';
const ABI = [
  {
    "constant": true, "inputs": [],
    "name": "manager",
    "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function"
  }, {
    "constant": false, "inputs": [], "name": "pickWinner", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"
  }, {
    "constant": true, "inputs": [], "name": "getPlayers", "outputs": [{ "name": "", "type": "address[]" }], "payable": false, "stateMutability": "view", "type": "function"
  }, {
    "constant": false, "inputs": [], "name": "enter", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function"
  }, {
    "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "players", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function"
  }, {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  }];

export default new web3.eth.Contract(ABI, address);