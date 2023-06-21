/* eslint-disable semi */
const CardInfo = ({ image, title, info, text, cardSize, imageSize }) => {
  return (
    <div className='card mb-3' style={{ maxWidth: cardSize }}>
      <div className='row g-0'>
        <div className='col-md-4'>
          <img
            src={image}
            className='img-fluid rounded-start'
            alt='...'
            style={{ minWidth: imageSize, minHeight: imageSize }}
          />
        </div>
        <div className='col-md-8'>
          <div className='card-body'>
            <h5 className='card-title'>{title}</h5>
            <p className='card-text'>{info}</p>
            <p className='card-text'>
              <small className='text-body-secondary'>{text}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardInfo;
