import { FETCH_POSTS, NEW_POSTS } from "../actions/types";

export const fetchPosts =() => dispatch =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => 
            dispatch({
                type: FETCH_POSTS,
                payload: posts 
            })
            // setPost(data);
            // console.log("data",data)
        );

};