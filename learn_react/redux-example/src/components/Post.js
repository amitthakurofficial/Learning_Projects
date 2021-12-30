import React, { useState, useEffect } from 'react';
import {connect } from 'react-redux';

import { fetchPosts } from "../actions/postActions";


const Post = (props) => {
    const [post,setPost] = useState([]);
    useEffect(() => (
        props.fetchPosts()
    //     // fetch('https://jsonplaceholder.typicode.com/posts')
    //     // .then(res => res.json())
    //     // .then(data => {
    //     //     setPost(data);
    //     //     // console.log("data",data)
    //     // })
    ),[props])

    const postItems = post.map(post => (
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    ))
    return (
        <div>
        {postItems}
        </div>
    )
}

export default connect(null,{fetchPosts}) (Post);