import React, { useState } from 'react';


export function Handel (){
    let [name, setName]=useState("hgshfgsdj")
   let  change= ()=>{
        setName("kjshjkfh");
    }
    
    return <div>
        <h1>hello. this function combonent {name}</h1>
        <button onClick={change}>chsnge usestate</button>
    </div>
}



// export function ToggleMessage() {
//   // Declare state variables
//   const [message, setMessage] = useState('Click the button to change this message!');
//   const [isChanged, setIsChanged] = useState(false);

//   // Define the onClick handler function
//   const handleClick = () => {
//     if (isChanged) {
//       // Reset to initial message
//       setMessage('Click the button to change this message!');
//     } else {
//       // Change to new message
//       setMessage('The message has been changed!');
//     }
//     // Toggle the state
//     setIsChanged(!isChanged);
//   };

//   return (
//     <div>
//       <p>{message}</p>
//       <button onClick={handleClick}>Toggle Message</button>
//     </div>
//   );
// }


