import React, { useContext, useEffect, useState } from 'react'
import Edit from "../img/edit.png"
import Delete from "../img/delete.png"
import { Link, useLocation } from 'react-router-dom'
import Menu from '../components/Menu'
import moment from "moment"
import axios from 'axios'
import { AuthContext } from "../context/authContext";

const Single = () => {

  const [post, setPost] = useState({});

  const location = useLocation();

  const postId = location.pathname.split("/", [2]);

  const {currentUser} = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data)
      } catch(err) {
        console.log(err)
      }
    };
    fetchData();
  }, [postId]);

  return (
    <div className='single'>
      <div className="content">
        <img src={post?.img} alt=""/>
        <div className="user">
          <img src="https://images.pexels.com/photos/26052213/pexels-photo-26052213/free-photo-of-young-woman-with-an-umbrella.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
            <div className="info">
              <span>{post.username}</span>
              <p>Posted {moment(post.date).fromNow()}</p>
            </div>
            {currentUser.username == post.username && <div className="edit">
              <Link to={`/write?edit=`}><img src={Edit} alt=""/></Link>
              <img src={Delete} alt=""/>
            </div>}
        </div> 
        <h1>{post.title}</h1> 
        {post.desc}
      </div>
      <Menu/>
    </div>
  )
}

export default Single