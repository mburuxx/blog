import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {
  const [value, setValue] = useState('');

  console.log(value);

  return (
    <div className="add">
      <div className="content">
        <input type="text" placeholder="Title" />
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
          <input style={{ display: "none" }} type="file" name="" id="file" />
          <label className='file' htmlFor="file">Upload image</label>
          <div className='buttons'>
            <button>Save draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input type="radio" name="cart" value="Technology" id="Technology" />
            <label htmlFor="Technology">Technology</label>
          </div>
          <div className="cat">
            <input type="radio" name="cart" value="Finance" id="Finance" />
            <label htmlFor="Finance">Finance</label>
          </div >
          <div className="cat">
            <input type="radio" name="cart" value="Agriculture" id="Agriculture" />
            <label htmlFor="Agriculture">Agriculture</label>
          </div>
          <div className="cat">
            <input type="radio" name="cart" value="Other" id="Other" />
            <label htmlFor="Other">Other</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;