import React from 'react';
import styled, { keyframes } from 'styled-components';
import { homeData } from '../data/homeData';
import WaterIcon from '../assets/raindrop-ai.jpeg';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HomeContainer = styled.div`
  background: linear-gradient(135deg, #e0f7fa, #b2ebf2);
  padding: 0rem 2rem;
  animation: ${fadeIn} 1s ease-in-out;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 4rem;

  h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 3.5rem;
    color: #004d40;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 1.2rem;
    color: #00796b;
    max-width: 800px;
    margin: 0 auto;
  }
`;

const RaindropIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="60px" height="60px">
    <path d="M12 2C8.69 2 6 4.69 6 8c0 2.21 1.79 4 4 4h4c2.21 0 4-1.79 4-4s-1.79-6-5-6zM12 14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z"/>
  </svg>
);

const SectionContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;
`;

const Section = styled.div`
  background: #ffffff;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  max-width: 350px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }

  h2 {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.8rem;
    color: #004d40;
    margin-bottom: 1rem;
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    color: #37474f;
    line-height: 1.6;
  }
`;

const IconWrapper = styled.div`
  margin-bottom: 1.5rem;
  color: #00796b;
`;

const HomeContent = () => {
  return (
    <HomeContainer>
      <Header>
        <h1><img src={WaterIcon} alt="Raindrop Icon" style={{ width: '100px', height: '100px' }} />{homeData.title}</h1>
        <p>{homeData.description}</p>
      </Header>
      <SectionContainer>
        {homeData.sections.map((section, index) => (
          <Section key={index}>
            <IconWrapper>
              {/* Placeholder for icons based on section.icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="48px" height="48px">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
              </svg>
            </IconWrapper>
            <h2>{section.title}</h2>
            <p>{section.content}</p>
          </Section>
        ))}
      </SectionContainer>
    </HomeContainer>
  );
};

export default HomeContent;
