import { useEffect, useState } from "react";
import Header from "./components/Header";
import Spinner from "./components/Spinner";
import MovieCard from "./components/MovieCard";

const API_BASE_URL = "https://api.themoviedb.org/3";

// /discover/movie

const API_KEY = import.meta.env.MOVIE_KEY_API;

const api ='eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNmQyNDczYjE3ZTU3YTQyYjk0M2YyMWEzMzNjMzMxNSIsIm5iZiI6MTczODY3NTIxNi4wOTYsInN1YiI6IjY3YTIxNDEwODBlNTkzZDVmZGUyY2QwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FjPgHeDbZJF065oEdaD-nWQ07806TM1kdmU3VsQKFw4'

const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  }
};





const App = ({searchTerm}) => {
    ///

    // const options = {
    //     method: 'GET',
    //     headers: {
    //       accept: 'application/json',
    //       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNmQyNDczYjE3ZTU3YTQyYjk0M2YyMWEzMzNjMzMxNSIsIm5iZiI6MTczODY3NTIxNi4wOTYsInN1YiI6IjY3YTIxNDEwODBlNTkzZDVmZGUyY2QwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FjPgHeDbZJF065oEdaD-nWQ07806TM1kdmU3VsQKFw4'
    //     }
    //   };
      
    //   fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
    //     .then(res => res.json())
    //     .then(res => console.log(res))
    //     .catch(err => console.error(err));

    ///
  const [errorMessage, setErrorMessage] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovies = async (query = "") => {
    setIsLoading(true);
    setErrorMessage("");

    try {

      const endpoint = query 
      ? `${API_BASE_URL}/discover/movie?query=${encodeURIComponent(query)}` 
      :  `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

      const response = await fetch(endpoint, API_OPTIONS);
      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }

      const data = await response.json();
      console.log(data)
      if (data.Response === "False") {
        setErrorMessage(data.Error || "Failed to fetch movies");
        setMovieList([]);
        return;
      }

      setMovieList(data.results || []);
      
    } catch (error) {
      console.error(`Error conecting, ${error}`);
      setErrorMessage("Error fetching movies. Please try again later");
    } finally {
        setIsLoading(false)
    }
  };

  useEffect(() => {
    fetchMovies(searchTerm);
  }, [searchTerm]);

  return (
    <main>
      <div className="pattern" />

      <div className="wrapper">
        <Header />

        <section className="all-movies">
          <h2 className="mt-[4px]">All Movies</h2>

          {isLoading ? (
            <Spinner/>
          ) : errorMessage ? (
            <p className="text-red-500">{errorMessage}</p>
          ) : (
            <ul>
              {movieList.map((movie) => (
                <MovieCard key={movie.id} movie={movie}>
                 
                </MovieCard>
              ))}
            </ul>
          )}
        </section>

        <div>
          
        </div>
      </div>
    </main>
  );
};

export default App;
