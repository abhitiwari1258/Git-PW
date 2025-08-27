import React from 'react';
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  
  const styles = {
    main: {
      padding: '20px',
    },
    title: {
      color: '#5C6AC4'
    },
  };
  
  function ChatBot(){
    return (
       <>               
        <input placeholder="Send a Messag To ChatBot" size="30" />
        <button>Send</button>
      </>
      )
  };
  
  function ChatMsg(props){
    const Msg = props.message 
    const sender = props.sender
    return (
      <div>
        {Msg}
        <img src="https://uploads.onecompiler.io/43t4rg6aq/43t4pprmy/user.png" width="50px" />
      </div>
      )
  }

  return (
    <>
      <ChatBot/>
      <ChatMsg message="Hello ChatBot" sender="user" />
      <ChatMsg message="Hello! How Can I Help U" sender="robot" />
      <ChatMsg message="can u get me todays date" sender="user" />
      <ChatMsg message="Today is August 8" sender="robot" />
      <ChatMsg message="how about Flip a Coin" sender="user" />
      <ChatMsg message="Sure! You got tails" sender="robot" />
      <ChatMsg message="how about Roll a Dice" sender="user" />
      <ChatMsg message="Sure! You got 6" sender="robot" />
    </>
  )
}

export default App
