import classes from './PostsList.module.css'
import Post from './Post';
import { useState , useEffect } from 'react';
function PostsList () {

    const [posts, setPosts] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    useEffect(()=>{
        async function fetchPosts () {
            setIsFetching(true)
            const response = await fetch('http://localhost:8080/posts');
            const resData = await response.json();

            if(resData.posts){
                setPosts(resData.posts)
            }
            setIsFetching(false);
        }
        fetchPosts();
    },[])

    function addPostHandler(postData) {

        fetch('http://localhost:8080/posts', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        setPosts((existingPosts) => {
            return [postData , ...existingPosts];
        } );
    }

    return (
        <>
            {!isFetching && posts.length > 0 && (
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
            {!isFetching && posts.length === 0 && 
                <div style={{textAlign: 'center', color: 'white' }}>
                    <h2>
                        There are no post yet.
                    </h2>
                    <p>
                        Start adding some !
                    </p>
                </div>
            }
            {isFetching && <div style={{textAlign: 'center', color: 'white' }}><p>Loading posts...</p></div>}
        </>
    );
};

export default PostsList;