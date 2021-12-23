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
  const [posts , setPosts] = useState(
    [
      {id: 1, title: 'JavaScript', body: "JavaScript - Это язык программирования высокого уровня"},
      {id: 2, title: 'JavaScript', body: "Python - Это язык программирования высокого уровня"},
      {id: 3, title: 'JavaScript', body: "Java - Это язык программирования высокого уровня"},
      {id: 4, title: 'JavaScript', body: "Ruby - Это язык программирования высокого уровня"},
    ])
  
  const [body, setBody] = useState('')
  const [title, setTitle] = useState('')
  const addNewPost = (e) => {
    e.preventDefault()
    const new_post = {id: Date.now(),
      title,
      body}
    console.log(new_post)
    setPosts([...posts, new_post])
    setBody('')
    setTitle('')

  }


  return (
    <div className="App">
      <form>
        <MyInput onChange={e => setTitle(e.target.value)} 
        value={title} type='text' placeholder='Название поста'/>
        <MyInput onChange={e => setBody(e.target.value)} value={body} type='text' placeholder='Содержание поста'/>
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title="Посты про языки программирования" />  
    </div>
  );
}

export default App;