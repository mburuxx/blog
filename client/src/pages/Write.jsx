import axios from 'axios';
import moment from 'moment';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate, useLocation } from 'react-router-dom';

const Write = () => {
  const state = useLocation().state;
  const [value, setValue] = useState(state?.title || "");
  const [title, setTitle] = useState(state?.desc || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || "");

  const navigate = useNavigate()
  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("/upload", formData);
      
      return res.data

    } catch (err) {
        console.log(err)
    }
  }

  const handleClick = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();

    try {
      state? await axios.put(`/posts/${state.id}`, {
        title, 
        desc:value, 
        cat, 
        img:file? imgUrl:"",
      }) 
    : await axios.post(`/posts/`, {
        title, 
        desc:value, 
        cat, 
        img:file? imgUrl:"",
        date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
      });
      navigate("/")
    } catch (err) {
        console.log(err)
    }
  };
  console.log(value);

  return (
    <div className="add">
      <div className="content">
        <input 
        type="text" 
        placeholder="Title" 
        onChange={e=>setTitle(e.target.value)} />
        <div className="editorContainer">
          <ReactQuill 
            className="editor" 
            theme="snow" 
            value={value} 
            onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input 
            style={{ display: "none" }} 
            type="file" 
            name="" 
            id="file" 
            onChange={e=>setFile(e.target.files[0])}/>
          <label className='file' htmlFor="file">Upload image</label>
          <div className='buttons'>
            <button>Save draft</button>
            <button onClick={handleClick}>Publish</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input 
              type="radio" 
              checked = {cat === 'technology'} 
              name="cat" 
              value="technology" 
              id="technology" 
              onChange={e=>setCat(e.target.value)} />
            <label htmlFor="technology">Technology</label>
          </div>
          <div className="cat">
            <input 
              type="radio" 
              checked = {cat === 'finance'} 
              name="cat" 
              value="finance" 
              id="finance" onChange={e=>setCat(e.target.value)} />
            <label htmlFor="finance">Finance</label>
          </div >
          <div className="cat">
            <input 
              type="radio" 
              checked = {cat === 'agriculture'} 
              name="cat" 
              value="agriculture" 
              id="agriculture" 
              onChange={e=>setCat(e.target.value)}/>
            <label htmlFor="agriculture">Agriculture</label>
          </div>
          <div className="cat">
            <input 
            type="radio" 
            checked = {cat === 'other'} 
            name="cat" 
            value="other" 
            id="other" onChange={e=>setCat(e.target.value)}/>
            <label htmlFor="other">Other</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;