import UserForm from './components/UserForm';
import BoxGenerator from './components/BoxGenerator';
import MessageForm from './components/MessageForm';
import MessageDisplay from './MessageDisplay';
import React, { useState } from 'react';




function App() {
  const [currentMsg, setCurrentMsg] = useState("There are no messages")


  return (
    <div>
      <UserForm />
      <BoxGenerator />
      <MessageForm OnNewMesage = {setCurrentMsg}/>
      <MessageDisplay message = {currentMsg}/>
    </div>
  );
}

export default App;
