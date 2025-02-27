import axios from "../api/axios";
import { useEffect, useState } from "react";

//import componenti
import Container from "../components/UI/Container";
import Card from "../components/UI/Card";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = () => {
    axios.get("/movies").then((res) => {
      setMovies(res.data);
    });
  };

  useEffect(fetchMovies, []);

  return (
    <Container>
      <div className="grid grid-cols-12 gap-4">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="col-span-12 md:col-span-6 lg:col-span-4 mx-auto"
          >
            <Card
              title={movie.title}
              abstract={movie.abstract}
              director={movie.director}
              image={movie.image}
              genre={movie.genre}
              release_year={movie.release_year}
              link={`/movies/${movie.id}`}
            />
          </div>
        ))}
      </div>
    </Container>
  );
}
