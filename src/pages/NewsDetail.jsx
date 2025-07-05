
import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { newsData } from './Home'; // Import newsData from Home.jsx

import { Link } from 'react-router-dom';

const DetailContainer = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 2rem auto;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h1 {
    color: #2c3e50;
    margin-bottom: 1rem;
    font-size: 2.5rem;
    border-bottom: 2px solid #3498db;
    padding-bottom: 0.5rem;
  }

  p {
    color: #34495e;
    line-height: 1.8;
    margin-bottom: 1rem;
    font-size: 1.1rem;
    white-space: pre-wrap; /* Preserve line breaks from fullContent */
  }
`;

const BackButton = styled(Link)`
  display: inline-block;
  margin-top: 2rem;
  padding: 0.8rem 1.5rem;
  background-color: #3498db;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;

const NewsDetail = () => {
  const { id } = useParams();
  const news = newsData.find((item) => item.id === parseInt(id));

  if (!news) {
    return <DetailContainer>Noticia no encontrada</DetailContainer>;
  }

  return (
    <DetailContainer>
      <h1>{news.title}</h1>
      <p>{news.fullContent}</p>
      <BackButton to="/">Volver al Inicio</BackButton>
    </DetailContainer>
  );
};

export default NewsDetail;
