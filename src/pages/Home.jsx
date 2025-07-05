
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const newsData = [
  {
    id: 1,
    title: 'Water Crisis in Mérida, Yucatán: A Region Facing Contamination and Scarcity',
    summary: 'Mérida, the capital of the Mexican state of Yucatán, is grappling with a severe and multifaceted water crisis, characterized by widespread contamination of its primary water source, the Great Mayan Aquifer, and increasing scarcity due to over-exploitation and inadequate infrastructure.',
    fullContent: 'Mérida, the capital of the Mexican state of Yucatán, is grappling with a severe and multifaceted water crisis, characterized by widespread contamination of its primary water source, the Great Mayan Aquifer, and increasing scarcity due to over-exploitation and inadequate infrastructure.\n\nRecent reports and studies paint a concerning picture of the region\'s water situation. The underground water supply, which serves as the sole source of drinking water for over 2 million residents, has been found to be contaminated with hazardous substances such as mercury and arsenic. This contamination is linked to a variety of factors, including soil erosion, the use of agrochemicals, and pollution from poorly managed landfills. The unique karstic geology of the Yucatán Peninsula, which makes the ground highly permeable, allows pollutants to easily seep into the aquifer.\n\nThe problem is exacerbated by the rapid and often unregulated urban and real estate development in and around Mérida. This growth has led to an increase in untreated wastewater, with estimates suggesting that 25% of household wastewater in the Yucatán is discharged directly into cenotes, the natural sinkholes that are a hallmark of the region, without proper treatment. Fecal contamination has been widely detected in the groundwater, posing a significant public health risk.\n\nIn addition to contamination, the region is facing a growing problem of water scarcity. The demand for water, driven by a burgeoning population and a thriving tourism industry, is outpacing the natural replenishment of the aquifer. Experts have warned that the continued issuance of water concessions for development could lead to the overallocation of water resources within a few years. This over-exploitation, combined with an aging and inefficient water infrastructure, has resulted in frequent water shortages, low water pressure, and intermittent service for many residents of Mérida and surrounding communities.\n\nThe local water utility, JAPAY, has been at the center of these issues, struggling to manage the growing demand and maintain a consistent supply. Power outages have also been a recurring problem, at times disabling water treatment plants and further disrupting the water supply.\n\nThe consequences of this water crisis are far-reaching. Health officials have warned of increased risks of diseases, including cancer, due to the consumption of contaminated water. The situation has also sparked social unrest, with communities protesting the lack of clean water and the prioritization of water for tourism and industrial use over the needs of the local population.\n\nLooking ahead, the challenges are significant. Projections indicate that rising sea levels could lead to the salinization of the aquifer, further jeopardizing the freshwater supply for coastal communities. While there are calls for better regulation, improved infrastructure, and more sustainable water management practices, the path to securing a safe and reliable water future for Mérida and the Yucatán Peninsula remains complex and urgent.'
  },
  {
    id: 2,
    title: 'Beer Giants and Industry Tap Scarce Resources',
    summary: 'The region\'s fragile freshwater aquifer, the sole source of drinking water for its inhabitants, is facing a dual threat of over-extraction and widespread contamination.',
    fullContent: 'The region\'s fragile freshwater aquifer, the sole source of drinking water for its inhabitants, is facing a dual threat of over-extraction and widespread contamination. This problem is intensified by the high water consumption of industries, especially large beer breweries. Key points include:\n\n- Over-extraction: The Cervecería Yucateca, a Grupo Modelo subsidiary, is authorized to extract over 7 million cubic meters of water annually, which is triple the consumption of the entire municipality of Hunucmá. A new Heineken brewery in Kanasín is expected to worsen the situation.\n- Contamination: The region\'s groundwater is highly vulnerable to pollution from untreated wastewater, agricultural runoff, and waste from pig farms. This contamination affects the cenotes, which are a primary source of drinking water.\n- Lack of Transparency: While industries claim to treat their wastewater, there is a lack of public data to verify these claims, leading to public skepticism.\n- Industrial Consumption: The industrial and hotel sectors account for 9% of the water consumption in the Mérida metropolitan area, but the actual figure for the entire peninsula could be much higher.'
  },
  {
    id: 3,
    title: 'Contamination of Yucatán Aquifer with Mercury and Arsenic',
    summary: 'The underground water supply in Yucatán has been found to be contaminated with hazardous substances such as mercury and arsenic, linked to soil erosion, agrochemicals, and poorly managed landfills.',
    fullContent: 'The underground water supply, which serves as the sole source of drinking water for over 2 million residents in Yucatán, has been found to be contaminated with hazardous substances such as mercury and arsenic. This contamination is linked to a variety of factors, including soil erosion, the use of agrochemicals, and pollution from poorly managed landfills. The unique karstic geology of the Yucatán Peninsula, which makes the ground highly permeable, allows pollutants to easily seep into the aquifer.',
  },
  {
    id: 4,
    title: 'Untreated Wastewater and Fecal Contamination in Cenotes',
    summary: 'Rapid urban development in Mérida has led to an increase in untreated wastewater, with estimates suggesting that 25% of household wastewater is discharged directly into cenotes, causing fecal contamination.',
    fullContent: 'The problem is exacerbated by the rapid and often unregulated urban and real estate development in and around Mérida. This growth has led to an increase in untreated wastewater, with estimates suggesting that 25% of household wastewater in the Yucatán is discharged directly into cenotes, the natural sinkholes that are a hallmark of the region, without proper treatment. Fecal contamination has been widely detected in the groundwater, posing a significant public health risk.',
  },
  {
    id: 5,
    title: 'Water Scarcity and Over-exploitation of Aquifer in Yucatán',
    summary: 'The demand for water, driven by a burgeoning population and tourism, is outpacing the natural replenishment of the aquifer, leading to water scarcity and warnings of overallocation of resources.',
    fullContent: 'In addition to contamination, the region is facing a growing problem of water scarcity. The demand for water, driven by a burgeoning population and a thriving tourism industry, is outpacing the natural replenishment of the aquifer. Experts have warned that the continued issuance of water concessions for development could lead to the overallocation of water resources within a few years. This over-exploitation, combined with an aging and inefficient water infrastructure, has resulted in frequent water shortages, low water pressure, and intermittent service for many residents of Mérida and surrounding communities.',
  },
  {
    id: 6,
    title: 'JAPAY Struggles with Water Supply and Infrastructure Issues',
    summary: 'The local water utility, JAPAY, is struggling to manage growing demand and maintain consistent supply, with power outages further disrupting water treatment plants.',
    fullContent: 'The local water utility, JAPAY, has been at the center of these issues, struggling to manage the growing demand and maintain a consistent supply. Power outages have also been a recurring problem, at times disabling water treatment plants and further disrupting the water supply.',
  },
  {
    id: 7,
    title: 'Health Risks and Social Unrest Due to Contaminated Water',
    summary: 'Health officials warn of increased disease risks, including cancer, from contaminated water, leading to social unrest and protests over water prioritization for industry and tourism.',
    fullContent: 'The consequences of this water crisis are far-reaching. Health officials have warned of increased risks of diseases, including cancer, due to the consumption of contaminated water. The situation has also sparked social unrest, with communities protesting the lack of clean water and the prioritization of water for tourism and industrial use over the needs of the local population.',
  },
  {
    id: 8,
    title: 'Rising Sea Levels Threaten Aquifer Salinization in Yucatán',
    summary: 'Projections indicate that rising sea levels could lead to the salinization of the aquifer, further jeopardizing the freshwater supply for coastal communities in Yucatán.',
    fullContent: 'Looking ahead, the challenges are significant. Projections indicate that rising sea levels could lead to the salinization of the aquifer, further jeopardizing the freshwater supply for coastal communities. While there are calls for better regulation, improved infrastructure, and more sustainable water management practices, the path to securing a safe and reliable water future for Mérida and the Yucatán Peninsula remains complex and urgent.',
  },
];

const CrisisDescription = styled.div`
  margin-bottom: 2rem;
  line-height: 1.6;
  background-color: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h2 {
    color: #c0392b;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
  }

  ul {
    list-style-type: disc;
    margin-left: 1.5rem;
    margin-bottom: 1rem;
  }

  li {
    margin-bottom: 0.5rem;
  }

  a {
    color: #3498db;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const CrisisIcon = styled.div`
  margin-bottom: 1rem;
  color: #c0392b; /* Icon color */
`;

const HomeContainer = styled.div`
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

const Home = () => {
  return (
    <HomeContainer>
      <CrisisDescription>
        <CrisisIcon>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="48px" height="48px">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
          </svg>
        </CrisisIcon>
        <h2>Water Crisis in Mérida, Yucatán</h2>
        <p>A significant water crisis is developing in Mérida, Yucatán, due to the over-extraction and contamination of the region's aquifer. This problem is intensified by the high water consumption of industries, especially large beer breweries. Key points include:</p>
        <ul>
          <li><strong>Over-extraction:</strong> The Cervecería Yucateca, a Grupo Modelo subsidiary, is authorized to extract over 7 million cubic meters of water annually, which is triple the consumption of the entire municipality of Hunucmá. A new Heineken brewery in Kanasín is expected to worsen the situation.</li>
          <li><strong>Contamination:</strong> The region's groundwater is highly vulnerable to pollution from untreated wastewater, agricultural runoff, and waste from pig farms. This contamination affects the cenotes, which are a primary source of drinking water.</li>
          <li><strong>Lack of Transparency:</strong> While industries claim to treat their wastewater, there is a lack of public data to verify these claims, leading to public skepticism.</li>
          <li><strong>Industrial Consumption:</strong> The industrial and hotel sectors account for 9% of the water consumption in the Mérida metropolitan area, but the actual figure for the entire peninsula could be much higher.</li>
        </ul>
        <p>Here are some sources for further reading:</p>
        <ul>
          <li><a href="https://www.grupomodelo.com/" target="_blank" rel="noopener noreferrer">Grupo Modelo</a></li>
          <li><a href="https://www.lajornadamaya.mx/" target="_blank" rel="noopener noreferrer">La Jornada Maya</a></li>
          <li><a href="https://piedepagina.mx/" target="_blank" rel="noopener noreferrer">Pie de Página</a></li>
          <li><a href="https://notirasa.com/" target="_blank" rel="noopener noreferrer">NotiRASA</a></li>
          <li><a href="https://contralinea.com.mx/" target="_blank" rel="noopener noreferrer">Contralínea</a></li>
          <li><a href="https://www.gob.mx/conagua" target="_blank" rel="noopener noreferrer">Gobierno de México - CONAGUA</a></li>
        </ul>
      </CrisisDescription>
      <h1>Recent News</h1>
      <NewsList>
        {newsData.map((news) => (
          <NewsItem key={news.id}>
            <Link to={`/news/${news.id}`}>
              <NewsTitle>{news.title}</NewsTitle>
              <p>{news.summary}</p>
            </Link>
          </NewsItem>
        ))}
      </NewsList>
    </HomeContainer>
  );
};

export { newsData };
export default Home;

