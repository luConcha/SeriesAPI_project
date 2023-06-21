/* eslint-disable semi */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SeasonDropList = ({ id }) => {
  const [seasons, setSeasons] = useState([]);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}/seasons`)
      .then((response) => response.json())
      .then((results) => {
        console.log(results);
        setSeasons(results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);
  return (
    <div className='dropdown'>
      <button
        className='btn btn-secondary dropdown-toggle'
        type='button'
        data-bs-toggle='dropdown'
        aria-expanded='false'
      >
        Seasons
      </button>
      <ul className='dropdown-menu'>
        {seasons.map((season) => (
          <li key={season.number}>
            <Link
              to={`/season/${id}/${season.number}`}
              className='dropdown-item'
            >
              Season {season.number}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SeasonDropList;
