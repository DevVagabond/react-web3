import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import web3 from './web3';
import lottery from './lottery';

class App extends Component {
  state = {
    manager: '',
    players: [],
    balance: '',
    value: ''
  };

  async componentDidMount() {
    const manager = await lottery.methods.manager().call();
    const players = await lottery.methods.getPlayers().call();
    const balance = await web3.eth.getBalance(lottery.options.address);
    this.setState({ manager, players, balance });
  };

  onSubmit = async (event) => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei(this.state.value, 'ether')
    });
  };

  pickWinner = async (event) => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    await lottery.methods.pickWinner().send({
      from: accounts[0]
    });


  };

  render() {
    return (
      <div>
        <h2>Lottery contract</h2>
        <p>This contract is managed by {this.state.manager} </p>
        <p>
          There are currently {this.state.players.length} number of players competing
          for {web3.utils.fromWei(this.state.balance, 'ether')} Ether
          </p>
        <hr />

        <form onSubmit={this.onSubmit}>
          <h4> Try luck</h4>
          <div>
            <label>Input your bet in ether</label>
            <input
              value={this.state.value}
              onChange={event => this.setState({ value: event.target.value })}
            />
          </div>
          <button>Enter</button>
          <hr />
          <div>
            <h2>Pick Winner!!!!!</h2>
            <button onClick={this.pickWinner}>pick winner</button>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
