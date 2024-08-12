import React from "react";

export class Clashand extends React.Component {
    state={
        name:"moosa",
        age:21,
        place:"malappuram"
    }
    chsngetext=()=>{
        this.setState ({
            name:"sahad",
            place:"kerala",
            age:22
        })
    }
      
    render (){
        return <div>
            <h1>hello. this class componenet</h1>
        <h3>my name is {this.state.name}</h3>
        <h3>my age is {this.state.age}</h3>
        <h3>my place is {this.state.place}</h3>
        <button onClick={this.chsngetext}>chnge text</button>
        
        </div>
    
    }
}
// export class ChangeStateOnClick extends React.Component {
//     constructor(props) {
//       super(props);
//       // Initialize state
//       this.state = {
//         message: 'Click the button to change this message!'
//       };
//     }
  
//     // Define the onClick handler function
//     handleClick = () => {
//       // Update state when the button is clicked
//       this.setState({
//         message: 'The message has been changed!'
//       });
//     };
  
//     render() {
//       return (
//         <div>
//           <p>{this.state.message}</p>
//           <button onClick={this.handleClick}>Change Message</button>
//         </div>
//       );
//     }
//   }