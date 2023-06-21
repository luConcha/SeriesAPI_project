/* eslint-disable semi */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CastList from '../components/CastList';
import SeasonDropList from '../components/SeasonDropList';
import CardInfo from '../components/CardInfo';

const SerieDetail = () => {
  const [serie, setSerie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((results) => {
        console.log(results);
        setSerie(results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <div className='container'>
      <br />
      <div className='row'>
        <div className='col'>
          <CardInfo
            image={serie?.image.medium}
            title={serie?.name}
            info={serie?.summary}
            text=''
            cardSize='auto'
            imageSize='auto'
          />
        </div>
      </div>
      <div className='row'>
        <div className='col-4'>
          <div
            className='card border-secondary mb-3'
            style={{ maxWidth: '210px' }}
          >
            <div className='card-header'>Show Info</div>
            <div className='card-body'>
              <p className='text-body-secondary'>
                <small>Network: {serie?.network.name}</small>
              </p>
              <p>
                <small className='text-body-secondary'>
                  Schedule: {serie?.schedule.time} on {serie?.schedule.days}
                </small>
              </p>
              <p>
                <small className='text-body-secondary'>
                  Status: {serie?.status}
                </small>
              </p>
              <p>
                <small className='text-body-secondary'>
                  Rating: {serie?.rating.average}
                </small>
              </p>
            </div>
          </div>
        </div>
        <div className='col-8'>
          <div className='row'>
            <div className='col'>
              <SeasonDropList id={id} />
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <br />
              <h5>Cast</h5>
              <CastList id={id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SerieDetail;
