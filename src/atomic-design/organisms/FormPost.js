import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { InputForm, TextAreaForm } from "./../atoms/";
import styled from "styled-components";
import { device } from "../../data/devices";

const FormData = styled.form`
  max-width: 300px;
  margin: auto;
  @media(${device.laptop}){
    max-width: 600px;
  }
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
    height: 300px;
  }
`
const SaveButton = styled.div`
  display:flex;
  justify-content: flex-end;
  button{
    cursor: pointer;
    background-color: Black;
    color: white;
    padding: 5px 15px;
    height:54px;
    display: block;
    width: fit-content;
    text-decoration: none;
    transition:0.5s;
    border-radius: 4px;
    border: 0;
  }
`

const FormPost = ({ onSubmit, postDetail }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [idPost, setIdPost] = useState("");
  const [createAt, setCreateAt] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPost = {
      id: idPost ? idPost : Date.now(),
      title,
      author,
      content,
      createdAt: createAt ? createAt : new Date().toISOString(),
    };
    onSubmit(newPost);
    setTitle("");
    setAuthor("");
    setContent("");
    setIdPost("");
    setCreateAt("");
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
    if(postDetail && Object.keys(postDetail).length > 0){
      setTitle(postDetail.title)
      setAuthor(postDetail.author)
      setContent(postDetail.content)
      setIdPost(postDetail.id)
      setCreateAt(postDetail.createAt)
    }
  }, [postDetail]);

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
        <SaveButton>
          <button type="submit">
            Save post
          </button>
        </SaveButton>
      </FormGroup>
    </FormData>
  );
};

FormPost.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default FormPost;