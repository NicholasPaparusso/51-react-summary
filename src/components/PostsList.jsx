import classes from './PostsList.module.css'
import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import { useState } from 'react';
function PostsList () {
    const [modalIsVisible, setModalIsVisible] = useState(true);
    const [enteredBody , setEnteredBody] = useState('');
    const [enteredAuthor , setEnteredAuhor] = useState('');

    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value)
    }

    function authorChangeHandler(event) {
        setEnteredAuhor(event.target.value)
    }

    function showModalHandler() {
        setModalIsVisible(true);
    }

    function hideModalHandler(){
        setModalIsVisible(false);
    }

    // let modalContent

    // if(modalIsVisible){
    //     modalContent = (
    //         <Modal onClose={hideModalHandler}>
    //             <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler}/>
    //         </Modal>
    //     );
    // }

    return (
        <>
            {modalIsVisible && (
            <Modal onClose={hideModalHandler}>
                <NewPost 
                onBodyChange={bodyChangeHandler} 
                onAuthorChange={authorChangeHandler}/>
            </Modal>
            )}
            <ul className={classes.posts}>
                <Post author={enteredAuthor} body={enteredBody} />
                <Post author={'Triciolas'} body={'Lorem'} />
            </ul>
        </>
    );
};

export default PostsList;