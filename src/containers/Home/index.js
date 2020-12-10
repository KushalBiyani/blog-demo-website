import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import './style.css';
import { Link } from "react-router-dom";
/**
* @author
* @function Home
**/


export default function Home() {

  const [posts, setPosts] = useState([]);            //using hooks

  useEffect(() => {                                  //fetch function to get data from api
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data)
      })
  }, [])

  return (
    <Layout >
      <div>
        <img src="https://ezyschooling-1.s3.amazonaws.com/carousel/Future/guidance-wide.jpg" alt="ezyschooling-image"></img>
      </div>
      <div className="container1">
        <h1>Our Blogs</h1>
        <div className="row">
          {posts.map((item) => (                                           //using map function to render the fetched blog posts 
            <div className="col-sm-4 col-md-offset-1 col-md-3 card"> 
              <Link to={`blog/${item.id}/${item.userId}`}>                 {/** directing to the blog page with blog id and userid passing as URL parmameters */}
                <div className="info-card">
                  <div className="info-card-header" key={item.id}>
                    <h2> {item.title} </h2>
                  </div>
                  <div className="info-card-details animate">
                    <p>{item.body}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

