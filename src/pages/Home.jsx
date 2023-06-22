/* eslint-disable semi */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [series, setSeries] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://api.tvmaze.com/shows')
      .then((response) => response.json())
      .then((results) => {
        console.log(results);
        setSeries(results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const findSerie = series.filter((serie) => {
    return serie.name.toLowerCase().includes(search.toLowerCase());
  });

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <div className='container'>
        <br />
        <h1>Series</h1>
        <form className='input-group mb-3'>
          <input
            type='text'
            className='form-control'
            id='search'
            placeholder='Enter serie'
            value={search}
            onChange={handleInputChange}
          />
        </form>

        <div className='container text-center'>
          <div className='row'>
            {findSerie.map((serie, index) => (
              <div className='col' key={index}>
                <img src={serie?.image.medium} alt='' />

                <Link to={`/serie/${serie.id}`}>
                  <p>{serie?.name}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
