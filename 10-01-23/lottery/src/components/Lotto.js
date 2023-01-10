import React from "react";

class Lotto extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numbers: [],
    };

    this.handleClick = this.handleClick.bind(this);
    this.reset = this.reset.bind(this);
  }

  pushNumbers = (counter) => {
    const arr = [];
    const randomGenerator = (num) => {
      return parseInt(Math.random() * num + 1);
    };
    while (counter) {
      const randomNumber = randomGenerator(49);
      while (arr.indexOf(randomNumber) !== -1) {
        randomNumber = randomGenerator(90);
      }
      arr.push(randomNumber);
      counter--;
    }
    return arr;
  };

  handleClick() {
    this.setState({
      numbers: this.pushNumbers(6),
    });
  }

  reset() {
    this.setState({
      numbers: [],
    });
  }

  render() {
    return (
      <div className="container">
        <h1>LOTTO</h1>
        <p>NUMERI FORTUNATI!</p>
        <ul className="container-number">
          {this.state.numbers.map((num, i) => {
            return (
              <li key={i}>
                <p>{num}</p>
              </li>
            );
          })}
        </ul>
        <div className="button-container">
          <button className="reset.button" onClick={this.reset}>
            Riprova
          </button>
          <button className="add.button" onClick={this.handleClick}>
            ESTRAZIONE NUMERI
          </button>
        </div>
      </div>
    );
  }
}

export default Lotto;
