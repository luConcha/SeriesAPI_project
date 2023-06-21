/* eslint-disable semi */
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import SeasonDropList from '../components/SeasonDropList';
import CardInfo from '../components/CardInfo';
const SeasonDetail = () => {
  const [episodes, setEpisodes] = useState([]);
  const [seasons, setSeasons] = useState([]);
  const { idShow, idSeason } = useParams();

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${idShow}/episodes`)
      .then((response) => response.json())
      .then((results) => {
        console.log(results);
        setEpisodes(results);
      })
      .catch((error) => console.error(error));
    console.log(idShow);
  }, [idShow]);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${idShow}/seasons`)
      .then((response) => response.json())
      .then((results) => {
        console.log(results);
        setSeasons(results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [idShow]);

  const episodebySeason = episodes.filter((episode) => {
    return episode.season == idSeason;
  });

  const seasonNumber = seasons.filter((season) => {
    return season.number == idSeason;
  });

  return (
    <>
      <div className='container'>
        <br />
        <nav aria-label='breadcrumb'>
          <ol className='breadcrumb'>
            <li className='breadcrumb-item'>
              <Link to={`/serie/${idShow}`}>
                <p>Serie Info</p>
              </Link>
            </li>
            <li className='breadcrumb-item active' aria-current='page'>
              Seasons Info
            </li>
          </ol>
        </nav>

        <h1>Season {idSeason}</h1>
        {seasonNumber.map((season) => (
          <CardInfo
            key={season.number}
            image={season.image.medium}
            title={season.name}
            info={season.summary}
            text={`Fecha de estreno: ${season.premiereDate} |  Finalizo: ${season.endDate}`}
            cardSize='auto'
            imageSize='auto'
          />
        ))}

        <SeasonDropList id={idShow} />
        <table className='table table-striped'>
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Fecha</th>
              <th scope='col'>Nombre</th>
              <th scope='col'>Score</th>
            </tr>
          </thead>
          <tbody>
            {episodebySeason.map((episode, index) => (
              <tr key={index}>
                <th scope='row'>{index + 1}</th>
                <td>{episode.airdate}</td>
                <td>{episode.name}</td>
                <td>{episode.rating.average}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default SeasonDetail;
