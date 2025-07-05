
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const newsData = [
  {
    id: 1,
    title: 'Crisis del Agua en Mérida, Yucatán: Una Región Enfrentando Contaminación y Escasez',
    summary: 'Mérida, la capital del estado mexicano de Yucatán, se enfrenta a una grave y multifacética crisis hídrica, caracterizada por la contaminación generalizada de su principal fuente de agua, el Gran Acuífero Maya, y una creciente escasez debido a la sobreexplotación y la infraestructura inadecuada.',
    fullContent: 'Mérida, la capital del estado mexicano de Yucatán, se enfrenta a una grave y multifacética crisis hídrica, caracterizada por la contaminación generalizada de su principal fuente de agua, el Gran Acuífero Maya, y una creciente escasez debido a la sobreexplotación y la infraestructura inadecuada.\n\nInformes y estudios recientes pintan un panorama preocupante de la situación hídrica de la región. Se ha descubierto que el suministro de agua subterránea, que sirve como única fuente de agua potable para más de 2 millones de residentes, está contaminado con sustancias peligrosas como mercurio y arsénico. Esta contaminación está relacionada con una variedad de factores, incluyendo la erosión del suelo, el uso de agroquímicos y la contaminación de vertederos mal gestionados. La geología kárstica única de la Península de Yucatán, que hace que el suelo sea altamente permeable, permite que los contaminantes se filtren fácilmente en el acuífero.\n\nEl problema se agrava por el rápido y a menudo no regulado desarrollo urbano e inmobiliario en y alrededor de Mérida. Este crecimiento ha llevado a un aumento de las aguas residuales no tratadas, con estimaciones que sugieren que el 25% de las aguas residuales domésticas en Yucatán se descargan directamente en cenotes, los sumideros naturales que son un sello distintivo de la región, sin el tratamiento adecuado. Se ha detectado ampliamente contaminación fecal en el agua subterránea, lo que representa un riesgo significativo para la salud pública.\n\nAdemás de la contaminación, la región se enfrenta a un creciente problema de escasez de agua. La demanda de agua, impulsada por una población en crecimiento y una próspera industria turística, está superando la recarga natural del acuífero. Los expertos han advertido que la continua emisión de concesiones de agua para el desarrollo podría llevar a la sobreasignación de recursos hídricos en pocos años. Esta sobreexplotación, combinada con una infraestructura hídrica envejecida e ineficiente, ha resultado en frecuentes escaseces de agua, baja presión de agua y servicio intermitente para muchos residentes de Mérida y las comunidades circundantes.\n\nLa empresa local de agua, JAPAY, ha estado en el centro de estos problemas, luchando por gestionar la creciente demanda y mantener un suministro constante. Los cortes de energía también han sido un problema recurrente, a veces inhabilitando las plantas de tratamiento de agua e interrumpiendo aún más el suministro de agua.\n\nLas consecuencias de esta crisis hídrica son de gran alcance. Las autoridades sanitarias han advertido sobre el aumento de los riesgos de enfermedades, incluido el cáncer, debido al consumo de agua contaminada. La situación también ha provocado malestar social, con comunidades que protestan por la falta de agua limpia y la priorización del agua para el turismo y el uso industrial sobre las necesidades de la población local.\n\nDe cara al futuro, los desafíos son significativos. Las proyecciones indican que el aumento del nivel del mar podría provocar la salinización del acuífero, poniendo en peligro aún más el suministro de agua dulce para las comunidades costeras. Si bien hay llamamientos para una mejor regulación, una infraestructura mejorada y prácticas de gestión del agua más sostenibles, el camino para asegurar un futuro hídrico seguro y confiable para Mérida y la Península de Yucatán sigue siendo complejo y urgente.'
  },
  {
    id: 2,
    title: 'Gigantes Cerveceros y la Industria Agotan Recursos Escasos',
    summary: 'El frágil acuífero de agua dulce de la región, la única fuente de agua potable para sus habitantes, se enfrenta a una doble amenaza de sobreextracción y contaminación generalizada.',
    fullContent: 'El frágil acuífero de agua dulce de la región, la única fuente de agua potable para sus habitantes, se enfrenta a una doble amenaza de sobreextracción y contaminación generalizada. Este problema se intensifica por el alto consumo de agua de las industrias, especialmente las grandes cervecerías. Los puntos clave incluyen:\n\n- Sobreextracción: La Cervecería Yucateca, una subsidiaria de Grupo Modelo, está autorizada a extraer más de 7 millones de metros cúbicos de agua anualmente, lo que triplica el consumo de todo el municipio de Hunucmá. Se espera que una nueva cervecería de Heineken en Kanasín empeore la situación.\n- Contaminación: El agua subterránea de la región es altamente vulnerable a la contaminación por aguas residuales no tratadas, escorrentías agrícolas y residuos de granjas porcinas. Esta contaminación afecta a los cenotes, que son una fuente principal de agua potable.\n- Falta de Transparencia: Si bien las industrias afirman tratar sus aguas residuales, hay una falta de datos públicos para verificar estas afirmaciones, lo que genera escepticismo público.\n- Consumo Industrial: Los sectores industrial y hotelero representan el 9% del consumo de agua en el área metropolitana de Mérida, pero la cifra real para toda la península podría ser mucho mayor.'
  },
  {
    id: 3,
    title: 'Contaminación del Acuífero de Yucatán con Mercurio y Arsénico',
    summary: 'Se ha descubierto que el suministro de agua subterránea en Yucatán está contaminado con sustancias peligrosas como mercurio y arsénico, relacionadas con la erosión del suelo, los agroquímicos y los vertederos mal gestionados.',
    fullContent: 'El suministro de agua subterránea, que sirve como única fuente de agua potable para más de 2 millones de residentes en Yucatán, se ha descubierto que está contaminado con sustancias peligrosas como mercurio y arsénico. Esta contaminación está relacionada con una variedad de factores, incluyendo la erosión del suelo, el uso de agroquímicos y la contaminación de vertederos mal gestionados. La geología kárstica única de la Península de Yucatán, que hace que el suelo sea altamente permeable, permite que los contaminantes se filtren fácilmente en el acuífero.',
  },
  {
    id: 4,
    title: 'Aguas Residuales no Tratadas y Contaminación Fecal en Cenotes',
    summary: 'El rápido desarrollo urbano en Mérida ha provocado un aumento de las aguas residuales no tratadas, y se estima que el 25% de las aguas residuales domésticas se descargan directamente en los cenotes, causando contaminación fecal.',
    fullContent: 'El problema se agrava por el rápido y a menudo no regulado desarrollo urbano e inmobiliario en y alrededor de Mérida. Este crecimiento ha llevado a un aumento de las aguas residuales no tratadas, con estimaciones que sugieren que el 25% de las aguas residuales domésticas en Yucatán se descargan directamente en cenotes, los sumideros naturales que son un sello distintivo de la región, sin el tratamiento adecuado. Se ha detectado ampliamente contaminación fecal en el agua subterránea, lo que representa un riesgo significativo para la salud pública.',
  },
  {
    id: 5,
    title: 'Escasez de Agua y Sobreexplotación del Acuífero en Yucatán',
    summary: 'La demanda de agua, impulsada por una población en crecimiento y el turismo, está superando la recarga natural del acuífero, lo que lleva a la escasez de agua y advertencias de sobreasignación de recursos.',
    fullContent: 'Además de la contaminación, la región se enfrenta a un creciente problema de escasez de agua. La demanda de agua, impulsada por una población en crecimiento y una próspera industria turística, está superando la recarga natural del acuífero. Los expertos han advertido que la continua emisión de concesiones de agua para el desarrollo podría llevar a la sobreasignación de recursos hídricos en pocos años. Esta sobreexplotación, combinada con una infraestructura hídrica envejecida e ineficiente, ha resultado en frecuentes escaseces de agua, baja presión de agua y servicio intermitente para muchos residentes de Mérida y las comunidades circundantes.',
  },
  {
    id: 6,
    title: 'JAPAY Lucha con Problemas de Suministro de Agua e Infraestructura',
    summary: 'La empresa local de agua, JAPAY, está luchando por gestionar la creciente demanda y mantener un suministro constante, con cortes de energía que interrumpen aún más las plantas de tratamiento de agua.',
    fullContent: 'La empresa local de agua, JAPAY, ha estado en el centro de estos problemas, luchando por gestionar la creciente demanda y mantener un suministro constante. Los cortes de energía también han sido un problema recurrente, a veces inhabilitando las plantas de tratamiento de agua e interrumpiendo aún más el suministro de agua.',
  },
  {
    id: 7,
    title: 'Riesgos para la Salud y Malestar Social por Agua Contaminada',
    summary: 'Las autoridades sanitarias advierten sobre el aumento de los riesgos de enfermedades, incluido el cáncer, por el agua contaminada, lo que provoca malestar social y protestas por la priorización del agua para la industria y el turismo.',
    fullContent: 'Las consecuencias de esta crisis hídrica son de gran alcance. Las autoridades sanitarias han advertido sobre el aumento de los riesgos de enfermedades, incluido el cáncer, debido al consumo de agua contaminada. La situación también ha provocado malestar social, con comunidades que protestan por la falta de agua limpia y la priorización del agua para el turismo y el uso industrial sobre las necesidades de la población local.',
  },
  {
    id: 8,
    title: 'El Aumento del Nivel del Mar Amenaza la Salinización del Acuífero en Yucatán',
    summary: 'Las proyecciones indican que el aumento del nivel del mar podría provocar la salinización del acuífero, poniendo en peligro aún más el suministro de agua dulce para las comunidades costeras de Yucatán.',
    fullContent: 'De cara al futuro, los desafíos son significativos. Las proyecciones indican que el aumento del nivel del mar podría provocar la salinización del acuífero, poniendo en peligro aún más el suministro de agua dulce para las comunidades costeras. Si bien hay llamamientos para una mejor regulación, una infraestructura mejorada y prácticas de gestión del agua más sostenibles, el camino para asegurar un futuro hídrico seguro y confiable para Mérida y la Península de Yucatán sigue siendo complejo y urgente.',
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
        <h2>Crisis del Agua en Mérida, Yucatán</h2>
        <p>Una importante crisis hídrica se está desarrollando en Mérida, Yucatán, debido a la sobreextracción y contaminación del acuífero de la región. Este problema se intensifica por el alto consumo de agua de las industrias, especialmente las grandes cervecerías. Los puntos clave incluyen:</p>
        <ul>
          <li><strong>Sobreextracción:</strong> La Cervecería Yucateca, una subsidiaria de Grupo Modelo, está autorizada a extraer más de 7 millones de metros cúbicos de agua anualmente, lo que triplica el consumo de todo el municipio de Hunucmá. Se espera que una nueva cervecería de Heineken en Kanasín empeore la situación.</li>
          <li><strong>Contaminación:</strong> El agua subterránea de la región es altamente vulnerable a la contaminación por aguas residuales no tratadas, escorrentías agrícolas y residuos de granjas porcinas. Esta contaminación afecta a los cenotes, que son una fuente principal de agua potable.</li>
          <li><strong>Falta de Transparencia:</strong> Si bien las industrias afirman tratar sus aguas residuales, hay una falta de datos públicos para verificar estas afirmaciones, lo que genera escepticismo público.</li>
          <li><strong>Consumo Industrial:</strong> Los sectores industrial y hotelero representan el 9% del consumo de agua en el área metropolitana de Mérida, pero la cifra real para toda la península podría ser mucho mayor.</li>
        </ul>
        <p>Aquí hay algunas fuentes para lectura adicional:</p>
        <ul>
          <li><a href="https://www.grupomodelo.com/" target="_blank" rel="noopener noreferrer">Grupo Modelo</a></li>
          <li><a href="https://www.lajornadamaya.mx/" target="_blank" rel="noopener noreferrer">La Jornada Maya</a></li>
          <li><a href="https://piedepagina.mx/" target="_blank" rel="noopener noreferrer">Pie de Página</a></li>
          <li><a href="https://notirasa.com/" target="_blank" rel="noopener noreferrer">NotiRASA</a></li>
          <li><a href="https://contralinea.com.mx/" target="_blank" rel="noopener noreferrer">Contralínea</a></li>
          <li><a href="https://www.gob.mx/conagua" target="_blank" rel="noopener noreferrer">Gobierno de México - CONAGUA</a></li>
        </ul>
      </CrisisDescription>
      <h1>Noticias Recientes</h1>
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

