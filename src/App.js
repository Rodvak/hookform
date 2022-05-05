// import UserForm from './components/UserForm';
// import BoxGenerator from './components/BoxGenerator';
import MessageForm from './components/MessageForm';
import MessageDisplay from './MessageDisplay';
import React, { useState } from 'react';




function App() {
  const [currentMsg, setCurrentMsg] = useState("There are no messages")

  const yourEmail = (newMessage) => {
    setCurrentMsg(newMessage);
  }

  return (
    <div>
      {/* <UserForm />
      <BoxGenerator /> */}
      <MessageForm newMesage = {yourEmail}/>
      <MessageDisplay message = {currentMsg}/>
    </div>
  );
}

export default App;
