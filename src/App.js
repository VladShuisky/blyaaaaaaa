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
      {id: 1, title: 'JavaScript', description: "JavaScript - Это язык программирования высокого уровня"},
      {id: 2, title: 'JavaScript', description: "Python - Это язык программирования высокого уровня"},
      {id: 3, title: 'JavaScript', description: "Java - Это язык программирования высокого уровня"},
      {id: 4, title: 'JavaScript', description: "Ruby - Это язык программирования высокого уровня"},
    ])
  
  
  const bodyInputRef = useRef()
  const [title, setTitle] = useState('')
  const addNewPost = (e) => {
    e.preventDefault()
    console.log(title)
    console.log(bodyInputRef.current.value)
  }


  return (
    <div className="App">
      <form>
        <MyInput onChange={e => setTitle(e.target.value)} 
        value={title} type='text' placeholder='Название поста'/>
        <MyInput type='text' placeholder='Содержание поста' ref={bodyInputRef}/>
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title="Посты про языки программирования" />  
    </div>
  );
}

export default App;