import React, {useState} from 'react';
import {useRef} from 'react'
import Counter from './Components/Counter'
import PostItem from './Components/PostItem'
import PostList from './Components/PostList';
import MyButton from './Components/UI/button/MyButton';
import MyInput from './Components/UI/input/MyInput';
import MyPicture from './Components/UI/picture/MyPicture';
import './Styles/App.css'

function App() {
  const [posts , setPosts] = useState([{id: 1, title:'Запись 1', body:'Текст записи 1'}])
  const [post, setPost] = useState({title: '', body: ''})
  const [first, delNote] = useState('Напишите первый пост')
  const addNewPost = (e) => {
    e.preventDefault()
    setPosts([...posts, {...post, id: Date.now()}])
    setPost({title: '', body: ''})

  }


  return (
    <div className="App">
      <form>
        <MyInput onChange={e => setPost({...post, title: e.target.value})} 
        value={post.title} type='text' placeholder='Название поста'/>
        <MyInput onChange={e => setPost({...post, body: e.target.value})} value={post.body} type='text' placeholder='Содержание поста'/>
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <h1 style={{textAlign:'center', fontSize: '10px'}}>{first}</h1>
      <PostList posts={posts} title="Посты про языки программирования" />  
    </div>
  );
}

export default App;