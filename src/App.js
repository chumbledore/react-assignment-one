import React, { Component } from 'react';
import './App.css';
import Validation from './components/Validation';
import Char from './components/Char';

class App extends Component {
  state = {
    charArr: [],
    charLength: '',
  }

  charHandler = (event) => {
    let length = event.target.value.length;
    const chars = event.target.value.split('');

    this.setState( {
      charArr: [...chars],
      charLength: length
    })
  }

  deleteCharHandler = (index) => {
    const charArr = [...this.state.charArr];

    charArr.splice(index, 1);

    const charLength = charArr.length;

    this.setState({
      charArr: charArr,
      charLength: charLength
    })
  }

  render() {
    let length = this.state.charLength;

    const charStyle = {
      display: 'inline-block',
      padding: '16px',
      textAlign: 'center',
      margin: '16px',
      border: '1px solid black'
  }

  let chars = null;

  if (this.state.charArr.length >= 0) {
    chars = (
      <div style={charStyle}>
        {this.state.charArr.map((char, index) => {
          return <Char 
            click={() => this.deleteCharHandler(index)}
            char={char}
            key={index}/>
        })}
      </div>
    )
  }

    return (
      <div className="App">
        <input type="text" value={this.state.charArr.join('')} onChange={(event) => this.charHandler(event)}/>
        <p>{length}</p>
        <Validation 
          length={this.state.charLength}/>
        {chars}
        </div>  
      );  
    }
}

export default App;


{/* <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p> */}