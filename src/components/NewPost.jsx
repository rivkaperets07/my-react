import { useState } from "react";

function NewPost({closeDialog,onAdd}){
    const  [authorname, setauthorname]=useState("");
    const[postcontent,setpostcontent]=useState("");

    const handleAuthorChange=(event)=>{
        setauthorname(event.target.value);
    }
    const handleContentChange=(event)=>{
        setpostcontent(event.target.value);
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        onAdd(authorname,postcontent);
        setauthorname("");
        setpostcontent("");
        closeDialog();
    }
    const handleCancel=(event)=>{
        event.preventDefault();
        setauthorname("");
        setpostcontent("");
        closeDialog();

    }
      return(
        <form onSubmit={handleSubmit}>
            <h2>New Post</h2>
            <label htmlFor="name">Autor name: </label>
            <input
            id="name"
            type="text"
            placeholder="enter author name"
            value={authorname}
            onChange={handleAuthorChange}
            />
            <label htmlFor="content">Post Content: </label>
            <textarea
            id="content"
            rows={4}
            placeholder="post your content"
            value={postcontent}
            onChange={handleContentChange}
            />
            <button type="submit"  >Submit</button>
            <button onClick={handleCancel} >Cancel</button>
           
        </form>
      )
}
export default NewPost;