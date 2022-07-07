import { useState } from "react";
const Home = () => {
    // let name='ali';
    const [name, setName] = useState('Ali');
    const [age, setAge] = useState(25);
    const handleClick = () => {
        setName('Ahmad');
        setAge(21);
    }

    return ( 
        <div className="home">
            <h1>home page </h1>
            <p>{name} is {age} years old</p>
            <button type="button" onClick={handleClick}>Click me</button>
        </div>
     );
}
 
export default Home;

// import React from "react";
// class Cat extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {sleeping: true};
//     }
//     render() {
//       return (
//         <div>
//           <p>{`The cat is ${this.state.sleeping ? "sleeping" : "eating"}`}</p>
//           <button onClick={() => this.setState({ sleeping: false })}>
//             Wake up!
//           </button>
//         </div>
//       );
//     }
//   }

//   export default Cat;