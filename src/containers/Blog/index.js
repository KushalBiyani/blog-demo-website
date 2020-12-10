import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import './style.css';
import { useTranslation } from 'react-i18next';
/**
* @author
* @function Blog
**/
function HeaderComponent(text)
{
    const {t, i18n} = useTranslation('common');
    return <h1>{t('text')}</h1>
}

export default function Blog(props) {
    
    //defining hooks with initail state 
    const [posts, setPosts] = useState([]);
    const [comments, setComment] = useState([]);
    const [User, setUser] = useState([]);

    //assigning value of URL parameters to constants
    const Id = props.match.params.blogId;
    const UserId = props.match.params.userId;
    //fetching function for get data of blog , user and comment of the post 
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${Id}`)
            .then((response) => response.json())
            .then((data) => {
                setPosts(data)
            })
    }, [])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${UserId}`)
            .then((response) => response.json())
            .then((data) => {
                setUser(data)
            })
    }, [])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${Id}/comments`)
            .then((response) => response.json())
            .then((data) => {
                setComment(data)
            })
    }, [])


    return (
        <Layout >
            <div className="bcontainer1">                
                    <div className="bcard">
                    <div className="row1">
                        <div className="blog">
                            <div className="h2">
                                <h2> {posts.title} </h2>
                            </div>
                            <div className="">
                                <p>{posts.body}</p>
                            </div>
                            <p>by <em >{User.name}</em></p>
                        </div>
                        <div className="comment-block" >
                            <div className="">
                                <h2> Comments </h2><ul>
                                {comments.map((item) => (
                            <div className="comments" key={item.id}>
                            <li><h5>{item.name}</h5></li>
                                <p>{item.body}</p>
                                <p>by <em>{item.email}</em></p>
                            </div>
                            ))}
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}