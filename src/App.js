import React, {useState} from 'react';
import {useRef} from 'react'
import Counter from './Components/Counter'
import PostItem from './Components/PostItem'
import PostList from './Components/PostList';
import MyButton from './Components/UI/button/MyButton';
import MyInput from './Components/UI/input/MyInput';
import MyPicture from './Components/UI/picture/MyPicture';
import PostForm from './Components/PostForm';
import './Styles/App.css'

function App() {
  const [posts , setPosts] = useState([{id: 1, title:'Запись 1', body:'Текст записи 1'}])
  
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))

  }


  return (
    <div className="App">
      <PostForm create={createPost} />
      <PostList remove={removePost} posts={posts} title="Посты про языки программирования" />  
    </div>
  );
}

export default App;