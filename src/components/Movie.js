import PropTypes from 'prop-types'
import './Movie.css'
import {Link} from 'react-router-dom'

function Movie({ year, title, summary, poster, genres}){
    return(
        <div className='movie'>
            <Link
                to={{pathname:'/movie-detail',
                state:{year,title,summary,poster,genres},
                }}
            >
                <img src={poster} alt={title} title={title}/>
                <div className ='movie-data'>
                    <h3 className ='movie-title' >{title}</h3>
                    <h5 className ='movie-year'>{year}</h5>
                    <ul className='movie-genres'>
                        {genres.map((genre, index) => {
                            return <li key={index} className='movie-genres'>{genre}</li>
                        })}
                    </ul>
                    <p className ='movie-summary'>{summary.slice(0,180)}...</p>
                </div>
            </Link>
        </div>
    )
}

Movie.propTypes = {
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie