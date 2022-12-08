import React, {useEffect, useState} from 'react'
import '../styles/App.css';

// const App = () => {
// //code here 

//   return (
//     <div id="main">
//       <p className={onchange} >Newton School</p>
//       <button id='button' onClick={}>Change Style</button>
//     </div>
//   )
// }
const red = 'red';
const blue = 'blue';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = { color: red };
    this.changeColor = this.changeColor.bind(this);
  }
  changeText(){
    const newText = this.state.text == bold ? Italics: bold;
    this.setState({ text: newText })
  }
  changeColor(){
    const newColor = this.state.color == red ? blue : red;
    this.setState({ color: newColor })
  }
  render(){
    return(
      <div style={{color: this.state.color}}>
      <p>Change My Color</p>
      <button onClick={this.changeColor} >Click</button>
      </div>
    )
  }
}

// export default App;
