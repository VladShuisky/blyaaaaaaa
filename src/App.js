import React, {useState} from 'react';
import {useRef} from 'react'
import Counter from './Components/Counter'
import PostItem from './Components/PostItem'
import PostList from './Components/PostList';
import MyButton from './Components/UI/button/MyButton';
import MyInput from './Components/UI/input/MyInput';
import PostForm from './Components/PostForm';
import MySelect from './Components/UI/select/MySelect';
import './Styles/App.css'

function App() {
  const [posts , setPosts] = useState([{id: 1, title:'Запись 1', body:'Текст записи 1'}])
  
  const createPost = (newPost) => {
    newPost.title.length ===0 || newPost.body.length ===0 
    ? alert("Добавьте текст и попробуйте снова")
    : setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))

  }


  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{margin: '15px 0'}}></hr>
      <div>
        <MySelect defaultValue="Сортировка"
                  options={[]} />
      </div>
      {posts.length !==0
          ? <PostList remove={removePost} posts={posts} title="Все записи" />  
          : <h1 style={{textAlign: 'center', color:'white'}}>Записи не найдены!</h1>
       }
    </div>
  );
}

export default App;