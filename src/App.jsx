import { Component, useState } from 'react';
import './App.css';

// function FunctionApp () {
//   const [counter, setCounter] = useState(0);
//   return(
//   <>
//   <Count counter={counter} hello={"hello"} array={[1, 2, 3, "안녕하세요"]}/>
//   <button 
//     onClick={() => {
//       setCounter((prev) => prev + 3);
//       }}
//     >
//       +
//     </button>
//     <button 
//     onClick={() => {
//       setCounter((prev) => prev - 3);
//       }}
//     >
//       -
//     </button>
//   </> 
//   );
// }

// function Count({array, counter, hello}) {
//   console.log('array', array);
//   console.log('counter', counter);
//   console.log('hello', hello);

//   return <div>counter : {counter}</div>;
// }

// function App() {
//   const [counter, setCounter] = useState(0)
//   return (
//   <>
//     <div>counter : {counter}</div>
//     <button 
//     onClick={() => {
//       setCounter((prev) => prev + 1);
//       }}
//     >
//       +
//     </button>
//     <button 
//     onClick={() => {
//       setCounter((prev) => prev - 1);
//       }}
//     >
//       -
//     </button>
//   </>
//   );
// }

class ClassApp extends Component {
  state = { counter: 1 }
    render(){
      return (
      <>
      <Count counter={this.state.counter} />
      <button 
      onClick={() => this.setState ({counter: this.state.counter + 1})}
      >
        +
      </button>
      <button
      onClick={() => this.setState ({counter: this.state.counter - 1})}
      >
        -
      </button>
      </>
      );
    }
}

class Count extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>counter : {this.props.counter}</div>;
  }
}


// export default FunctionApp
export default ClassApp;