import React,{ useState } from 'react';

import { Avatar, Input } from '@material-ui/core'

import'./styles.css';

function MessageSender() {

  const [input, setInput] = useState("");

  const handleChage = () => {

  }

  const handleSubmit = () => {

  }

  return (
    <div className="messageSender">
      <div className="messageSender__top">

      <Avatar src="https://avatars3.githubusercontent.com/u/57350762?s=460&u=5c28607a6573c3f9ae703ebc9e23c31c916e3ab3&v=4" />

      <form>
        <input type="text" className="messageSender__input" placeholder="Wht's on your mind?" value = {input} onChange={(e) => setInput(e.target.value)} />
        
        <Input type="file" className="messageSender__fileSelector" onChange={handleChage} />

        <button onClick={handleSubmit} type="submit">Hidden Submit</button>
      </form>

      </div>

    </div>
  )
}

export default MessageSender;