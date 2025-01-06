import axios from 'axios';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState("");

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("/upload", formData);
      
      console.log(res.data);

    } catch (err) {
        console.log(err)
    }
  }

  const handleClick = async (e) => {
    e.preventDefault();
    upload();
  }
  console.log(value);

  return (
    <div className="add">
      <div className="content">
        <input type="text" placeholder="Title" onChange={e=>setTitle(e.target.value)} />
        <div className="editorContainer">
          <ReactQuill className="editor" theme="snow" value={value} onChange={setValue} />
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
          <input style={{ display: "none" }} type="file" name="" id="file" onChange={e=>setFile(e.target.files[0])}/>
          <label className='file' htmlFor="file">Upload image</label>
          <div className='buttons'>
            <button>Save draft</button>
            <button onClick={handleClick}>Publish</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input type="radio" name="cart" value="Technology" id="Technology" onChange={e=>setCat(e.target.value)} />
            <label htmlFor="Technology">Technology</label>
          </div>
          <div className="cat">
            <input type="radio" name="cart" value="Finance" id="Finance" onChange={e=>setCat(e.target.value)} />
            <label htmlFor="Finance">Finance</label>
          </div >
          <div className="cat">
            <input type="radio" name="cart" value="Agriculture" id="Agriculture" onChange={e=>setCat(e.target.value)}/>
            <label htmlFor="Agriculture">Agriculture</label>
          </div>
          <div className="cat">
            <input type="radio" name="cart" value="Other" id="Other" onChange={e=>setCat(e.target.value)}/>
            <label htmlFor="Other">Other</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;