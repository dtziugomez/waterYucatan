import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { newsData } from '../data/newsData';

const NewsContainer = styled.div`
  padding: 2rem;
  max-width: 960px;
  margin: 0 auto;
`;

const NewsList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const NewsItem = styled.li`
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const NewsTitle = styled.h2`
  margin-top: 0;
  color: #34495e;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const NewsSummary = styled.p`
  color: #7f8c8d;
  font-size: 0.95rem;
  line-height: 1.5;
`;

const News = () => {
  return (
    <NewsContainer>
      <h1>Noticias Recientes</h1>
      <NewsList>
        {newsData.map((news) => (
          <NewsItem key={news.id}>
            <Link to={`/news/${news.id}`}>
              <NewsTitle>{news.title}</NewsTitle>
              <NewsSummary>{news.summary}</NewsSummary>
            </Link>
          </NewsItem>
        ))}
      </NewsList>
    </NewsContainer>
  );
};

export default News;