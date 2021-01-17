import React from 'react';

import "./styles.css";

import StoryReel from './components/StoryReel';
import MessageSender from './components/MessageSender';
import Post from './components/Post';

function Feed() {
  return (
      <div className="feed">
          <StoryReel />
          <MessageSender />

          <Post  
            profilePic="https://avatars3.githubusercontent.com/u/57350762?s=460&u=5c28607a6573c3f9ae703ebc9e23c31c916e3ab3&v=4"
            message="Olá mundo"
            timestamp="2021-01-17T14:57:17.224Z
            "
            imgName="imgName"
            username="Luiz Carlos"
          />

          {/* {
              postsData.map(entry => (
                  <Post 
                  
                    profilePic={entry.avatar}
                    message={entry.text}
                    timestamp={entry.timestamp}
                    imgName={entry.imgName}
                    username={entry.user}
                  />

              ))
          } */}

      </div>

  );
}

export default Feed;