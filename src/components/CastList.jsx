/* eslint-disable semi */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import CardInfo from './CardInfo';

const CastList = ({ id }) => {
  const [cast, setCast] = useState([]);
  const cardSize = 280;
  const imageSize = 90;

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}/cast`)
      .then((response) => response.json())
      .then((results) => {
        console.log(results);
        setCast(results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <div className='container-sm text-center'>
      <div className='row row-cols-auto'>
        {cast.map((cast, index) => (
          <CardInfo
            key={index}
            image={cast.person.image.medium}
            title={cast.person.name}
            info=''
            text={`as ${cast.character.name}`}
            cardSize={cardSize}
            imageSize={imageSize}
          />
        ))}
      </div>
    </div>
  );
};
export default CastList;
