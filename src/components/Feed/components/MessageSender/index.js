import React,{ useState } from 'react';

import { Avatar, Input } from '@material-ui/core';

import VideoCamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

import'./styles.css';

function MessageSender() {

  const [input, setInput] = useState("");

  const [image, setImage] = useState(null);

  
  const handleChange = (e) => {
    if(e.target.files[0]){
        setImage(e.target.files[0])
      }
      
    }
    
  const handleSubmit = (e) => { 
    e.preventDefault();

    setInput("");
  }
  
  return (
    <div className="messageSender">
      <div className="messageSender__top">

        <Avatar src="https://avatars3.githubusercontent.com/u/57350762?s=460&u=5c28607a6573c3f9ae703ebc9e23c31c916e3ab3&v=4" />

        <form>
          <input type="text" className="messageSender__input" placeholder="Wht's on your mind?" value = {input} onChange={(e) => setInput(e.target.value)} />
          
          <Input type="file" className="messageSender__fileSelector" onChange={handleChange} />

          <button onClick={handleSubmit} type="submit">Hidden Submit</button>
        </form>

      </div>

      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideoCamIcon style={{ color: 'red'}} />
          <h3> Live Video</h3>
        </div>

        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: 'green'}} />
          <h3>Photo/Video</h3>
        </div>

        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: 'orange'}} />
          <h3>Feeling/Activity</h3>
        </div>

      </div>

    </div>
  )
}

export default MessageSender;