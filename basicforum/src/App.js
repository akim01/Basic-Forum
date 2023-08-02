import React from 'react';
import {comments} from './commentData';
import Card from './Card';

function App() {
  const commentCard = comments.map(comment => 
    <Card commentObject={comment}/>
  ); 
  return commentCard; 
};

export default App;