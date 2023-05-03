import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { InputForm, TextAreaForm } from "./../atoms/";
import styled from "styled-components";

const FormData = styled.form`
  max-width: 300px;
  margin: auto;
`
const FormGroup = styled.div`
  padding-bottom: 15px;
  label{
    width: 100%;
    display: block;
    padding-bottom: 5px;
  }
  input, textarea{
    width: 100%;
    border-radius: 4px;
    resize: none;
    border: 0;
    box-shadow: 0px 2px 7px 0px #a3a3a3;
    padding-left: 15px;
    padding-right: 15px;
  }
  input{
    height: 54px;
  }
  textarea{
    height: 84px;
  }
`


const FormPost = ({ onSubmit, postDetail }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [idPost, setIdPost] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      author,
      content,
      createdAt: new Date().toISOString(),
    };
    onSubmit(newPost);
    setTitle("");
    setAuthor("");
    setContent("");
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  useEffect( () => {
    console.log('postDetail:', postDetail)
    if(postDetail){
      setTitle(postDetail.title)
      setAuthor(postDetail.author)
      setContent(postDetail.content)
    }
  }, [postDetail])

  return (
    <FormData onSubmit={handleSubmit}>
      <FormGroup className="form-group">
        <label htmlFor="title">Title:</label>
        <InputForm
          type="text"
          id="title"
          value={title}
          onChange={handleTitleChange}
          required
          minLength={5}
        />
      </FormGroup>
      <FormGroup className="form-group">
        <label htmlFor="author">Author:</label>
        <InputForm
          type="text"
          id="author"
          value={author}
          onChange={handleAuthorChange}
          required
          minLength={3}
        />
      </FormGroup>
      <FormGroup className="form-group">
        <label htmlFor="content">Content:</label>
        <TextAreaForm
          id="content"
          value={content}
          onChange={handleContentChange}
          required
          minLength={10}
        />
      </FormGroup>
      <FormGroup className="form-group buttons">
        <button type="submit">Save post</button>
      </FormGroup>
    </FormData>
  );
};

FormPost.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default FormPost;