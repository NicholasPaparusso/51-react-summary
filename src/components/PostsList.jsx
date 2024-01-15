import classes from './PostsList.module.css'
import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import { useState } from 'react';
function PostsList ({isPosting,onStopPosting}) {

    const [posts, setPosts] = useState([]);

    function addPostHandler(postData) {
        setPosts((existingPosts) => {
            return [postData , ...existingPosts];
        } );
    }

    return (
        <>
            {isPosting && (
            <Modal onClose={onStopPosting}>
                <NewPost
                    onAddPost={addPostHandler}
                    onCancel={onStopPosting} 
                />
            </Modal>
            )}
            {posts.length > 0 && (
                <ul className={classes.posts}>
                    {
                        posts.map( (post) => {
                            return(
                                <Post 
                                    key={`${post.author}-${post.body}-${new Date().toString()}`} 
                                    author={post.author} 
                                    body={post.body} 
                                />
                            );
                        } )
                    }
                </ul>

            )}
            {posts.length === 0 && 
                <div style={{textAlign: 'center', color: 'white' }}>
                    <h2>
                        There are no post yet.
                    </h2>
                    <p>
                        Start adding some !
                    </p>
                </div>
            }
        </>
    );
};

export default PostsList;