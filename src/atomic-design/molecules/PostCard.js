import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import postImage from '../../assets/post_image.webp'

const PostCardContainer = styled.div`
  padding: 10px;
  width: 100%;
  @media(min-width: 768px){
    width:50%;
  }
  @media(min-width: 992px){
    width:33.3%;
  }
`

const PostCardDetail = styled.div`
  box-shadow: 0px 2px 7px 0px #a3a3a3;
  border-radius: 4px;
  transition: 0.5s;
  &:hover{
    .btn-detail, .btn-edit{
      a{
        transform: scale(1.1);
      }
    }
  }
  p{
    margin: 0;
  }
  .content{
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-bottom:10px;
    transition: 0.5s;
    line-height: 1.65rem;
    text-align: justify;
  }
`

const Btns = styled.div`
  display: flex;
  justify-content: space-between;
`

const BtnDetail = styled.div`
  display:flex;
  justify-content: flex-end;
  padding-top: 10px;
  a{
    cursor: pointer;
    background-color: rgb(209, 92, 0);
    color: white;
    padding: 5px 10px;
    display: block;
    width: fit-content;
    text-decoration: none;
    transition:0.5s;
    border-radius: 4px;
  }
`

const BtnEdit = styled.div`
  display:flex;
  justify-content: flex-end;
  padding-top: 10px;
  a{
    cursor: pointer;
    background-color: Black;
    color: white;
    padding: 5px 10px;
    display: block;
    width: fit-content;
    text-decoration: none;
    transition:0.5s;
    border-radius: 4px;
  }
`

const PostImage = styled.div`
  width: 100%;
  height: 180px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

const PostContent = styled.div`
  padding: 10px;
`

const TitlePost = styled.h2`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  min-height: 58px;
`

const ContentPost = styled.p`
  min-height: 105.56px;
`

function PostCard(props) {
  const [newDate, setNewDate] = useState("")
  useEffect(() => {
    if(props.createdAt){
      const date = new Date(props.createdAt); // obtiene la fecha actual
      const dia = date.getDate().toString().padStart(2, '0'); // obtiene el día y lo convierte en string con 2 dígitos
      const mes = (date.getMonth() + 1).toString().padStart(2, '0'); // obtiene el mes (0-11) y lo convierte en string con 2 dígitos
      const anio = date.getFullYear(); // obtiene el año con 4 dígitos
      const createdAt = `${dia}/${mes}/${anio}`; // concatena los componentes de la fecha en el formato deseado
      setNewDate(createdAt)
    }
  }, [props?.createdAt])
  
  return (
    <PostCardContainer>
      <PostCardDetail
        key={props.id}>
        <PostImage style={{ backgroundImage: `url(${postImage})` }}></PostImage>
        <PostContent>
          <TitlePost>{props.title}</TitlePost>
          <ContentPost className='content' dangerouslySetInnerHTML={{ __html: props.content }}></ContentPost>
          <p className='date'>Date: {newDate}</p>
          <Btns className='btns'>
            <BtnEdit className='btn-edit'>
              <Link to={`/blog/edit/${props.id}`} >Edit post</Link>
            </BtnEdit>
            <BtnDetail className='btn-detail'>
              <Link to={`/blog/detail/${props.id}`} >Read more</Link>
            </BtnDetail>
          </Btns>
        </PostContent>
      </PostCardDetail>
    </PostCardContainer>
  );
}

export default PostCard;