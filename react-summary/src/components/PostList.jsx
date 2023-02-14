import { useState } from 'react';
import classes from './PostsList.module.css';

import Post from "./Post";
import NewPost from './NewPost';
import Modal from './Modal';

function PostsList({isPosting, onStopPosting}){
    // const stateData = useState("");
    // stateData[0] // current value
    // stateData[1] // state updateing function
    
    // let modalContent;
    // if (modalIsVisible) {
    //     <Modal onClose = {hideModalHandler}>
    //     <NewPost 
    //         onBodyChange = {bodyChangeHandler} 
    //         onAuthorChange = {authorChangeHandler}
    //         />
    //     </Modal>
    // }
    
    const [post, setPosts] = useState([]);
    function addPostHandler(postData){
        // setPosts([postData, ...post]); // add postData to the existing posts
        // this code is not ideal, is it based on previous values
        setPosts((existingPost) => [postData, ...existingPost])
        // better way to update post because react does not guarantee 
        // to call the function instantly, you can get incorrect previous state updates
    }

    return(
        <>
            {
                isPosting ? // modalIsVisible && without ? and :
                (
                    <Modal onClose = {onStopPosting}>
                        <NewPost 
                            onCancel = {onStopPosting}
                            onAddPost = {addPostHandler}
                        />
                    </Modal>
                ) : false
            }
            
            {/*modalContent*/}

            <ul className={classes.posts}>
                <Post author = "Emanuel" body = "I am learning React"/>
                <Post author = "Bruce Lee" body = "I am teaching MMA"/>
            </ul>
        </>
    );
}

export default PostsList;