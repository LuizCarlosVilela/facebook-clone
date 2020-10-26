import React from 'react';

import "./styles.css";

import StoryReel from './components/StoryReel';
import MessageSender from './components/MessageSender';

function Feed() {
  return (
      <div className="feed">
          <StoryReel />
          <MessageSender />

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