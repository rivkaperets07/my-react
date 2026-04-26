import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Post from './components/Post'
import NewPost from './components/NewPost'


function App() {
  const [posts,setPost]=useState([
    {name:"rivka", content:"aaaaaaa"},
    {name:"lea", content:"aaaaaaa"},
    {name:"sara", content:"aaaaaaa"},
  ]);
  const [isFormOpen,setIsForm]=useState(false);
  const handleLogPosts=()=>{
    console.log(posts);
  };
  const handleEditContent=(index, newcontent)=>{
    setPost((post)=>{
       const updateposts=[...post];
       updateposts[index].content=newcontent;
       return updateposts;
    })
  };
  const onAdd=(author,content)=>{
    setPost((prevpost)=>[...prevpost,{author,content}])
  }
  const deletePost = (postname) => {
  const updatedPosts = posts.filter(post => post.name !== postname);
  setPost(updatedPosts);
};
  const handleNewPost=()=>{
       setIsForm(true);
  }
  const handleCancel=()=>{
    setIsForm(false);
  }
  return (
    <>  
    {posts.map((post, index) => (
    <Post 
    key={index} 
    name={post.name} 
    content={post.content} 
    onEdit={(newContent) => handleEditContent(index, newContent)} 
    DeletePost={()=>deletePost(post.name)}
    />
   ))}
   <div>
    <button className='button' onClick={handleLogPosts}
    >log posts to console</button>
   </div>
   
    <button className='button' onClick={handleNewPost}
    >Add New Post</button>
    {isFormOpen && (
      <>
      <div onClick={handleCancel}/>
      < NewPost onAdd={onAdd} closeDialog={handleCancel}></NewPost>
      </>
    )};

    </>
  )
}

export default App
