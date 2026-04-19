import styles from "./Post.module.css"
import { useState } from "react";

function Post({name,content}){
    const [postContent, setPostContent]=useState(content);
    const handleInputChange=(event)=>{
        setPostContent(event.target.value);
    }
    return(
    <>
    <p className={styles.name}>{name}</p>
    <p className={styles.content}>{postContent}</p>
    <input
      className={styles.input}
      type="text"
      onChange={handleInputChange}
      placeholder="edit post content"
    >
    </input>
    </>
    )
    
}
export default Post;