import React from 'react';
import PropTypes from 'prop-types'

function Movie ( { title, year, summary, poster } ){
  return(
    <div className="movie" >
      <img src={poster} alt={title} title={title}/>
      <div className= "movie__data">
        <h3 className="movie__title" style={{ backgroundColor: 'red' }}>{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <p className="movie__summary">{summary}</p>
      </div>
    </div>
  )
}
// {poster} 에는 movie.medium_cover_image의 실제 데이터인 이미지 url이 들어가게 된다.

Movie.propTypes = {
  year: PropTypes.number.isRequired,
  title : PropTypes.string.isRequired,
  summary : PropTypes.string.isRequired,
  poster : PropTypes.string.isRequired,
};

export default Movie;