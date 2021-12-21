import React, {useState} from 'react';
import Counter from './Components/Counter'
import PostItem from './Components/PostItem'
import PostList from './Components/PostList';
import MyButton from './Components/UI/button/MyButton';
import './Styles/App.css'

function App() {
  const [posts , setPosts] = useState(
    [
      {id: 1, title: 'JavaScript', description: "JavaScript - Это язык программирования высокого уровня"},
      {id: 2, title: 'JavaScript', description: "Python - Это язык программирования высокого уровня"},
      {id: 3, title: 'JavaScript', description: "Java - Это язык программирования высокого уровня"},
      {id: 4, title: 'JavaScript', description: "Ruby - Это язык программирования высокого уровня"},
    ]
  )


  return (
    <div className="App">
      <form>
        <input type='text' placeholder='Название поста'/>
        <input type='text' placeholder='Содержание поста'/>
        <MyButton>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title="Посты про языки программирования" />  
    </div>
  );
}

export default App;