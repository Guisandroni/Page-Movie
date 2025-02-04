


const MovieCard = ({movie:
    {title, vote_average, poster_path, release_date, original_language}
})=>{
    return(

        <div className="movie-card text-white">
            <img src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : '/no-movie.png'} alt="" />

            <p className="text-xl font-extrabold  " >{title}</p>
          
           
          

        
        </div>
    )
}


export default MovieCard