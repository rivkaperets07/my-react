import styles from "./Post.module.css"
import { useState } from "react";

function Post({name,content,DeletePost}){
    
    const[editContent,setEditContent]=useState(content);
    const[isEdit,setIsEdit]=useState(false);
    const handleInputChange=(event)=>{
        setEditContent(event.target.value);
    }
    const handleEdit=()=>{
        setIsEdit(true);
    }
    const handleSaveChange=()=>{
        EditContent(editContent);
        setIsEdit();
    }
    const handleCancelEdit=()=>{
        setIsEdit();
    }
    const handleDeletePost=()=>{
        DeletePost(name);
        setIsEdit();
    }
    return(
    <>
    <p className={styles.name}>{name}</p>
    <p className={styles.content}>{content}</p>
    <button  onClick={handleDeletePost}>Delete</button>
    {!isEdit && (<button className={styles.button} onClick={handleEdit}>edit</button>)}
    {isEdit && (<div>
        <input
      className={styles.input}
      type="text"
      onChange={handleInputChange}
      placeholder="edit post content"
       />
     <button className={styles.button} onClick={handleSaveChange}>save</button>
     <button className={styles.button} onClick={handleCancelEdit}>cancel</button>
    </div>)}
    
    
    
    </>
    )
    
}
export default Post;