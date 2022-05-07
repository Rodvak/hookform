import UserForm from './components/UserForm';
import BoxForm from './components/BoxForm';
import MessageForm from './components/MessageForm';
import MessageDisplay from './MessageDisplay';
import React, { useState } from 'react';
import BoxDisplay from './components/BoxDisplay';




function App() {
  // const [currentMsg, setCurrentMsg] = useState("There are no messages")

  const [boxes, setCurrentBoxes] = useState([])

  const handleNewBox = (newBox) => {
    setCurrentBoxes(newBox)
    
  }
  


  return (
    <div>
      <UserForm />

      <BoxForm onNewBox = {handleNewBox}/>
      <BoxDisplay box = {boxes}/>
{/* 
      <MessageForm OnNewMesage = {setCurrentMsg}/>
      <MessageDisplay message = {currentMsg}/> */}
    </div>
  );
}

export default App;
