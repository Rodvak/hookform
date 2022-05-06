import UserForm from './components/UserForm';
import BoxGenerator from './components/BoxGenerator';
import MessageForm from './components/MessageForm';
import MessageDisplay from './MessageDisplay';
import React, { useState } from 'react';
import BoxDisplay from './components/BoxDisplay';




function App() {
  const [currentMsg, setCurrentMsg] = useState("There are no messages")

  const [currentBox, setCurrentBox] = useState('There is no boxes')



  return (
    <div>
      <UserForm />

      <BoxGenerator newBox = {setCurrentBox}/>
      <BoxDisplay box = {currentBox}/>

      <MessageForm OnNewMesage = {setCurrentMsg}/>
      <MessageDisplay message = {currentMsg}/>
    </div>
  );
}

export default App;
