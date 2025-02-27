import axios from "../api/axios";
import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { Link } from "react-router";

//import dei componenti
import MovieDetail from "../components/UI/movieDetail";
import Container from "../components/UI/Container";
import StarsVote from "../components/UI/StarsVote";
import Buttons from "../components/UI/Buttons";

export default function Detailpage() {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchMovie = () => {
    axios
      .get(`/movies/${id}`)
      .then((res) => {
        setMovie(res.data);
      })
      .catch((err) => {
        if (err.status === 404) {
          navigate("/404");
        }
      });
  };

  useEffect(fetchMovie, [id, navigate]);
  return (
    <Container>
      <Link to="/">
        <Buttons variant="primary" type="sm">
          Home
        </Buttons>
      </Link>
      <MovieDetail
        title={movie.title}
        abstract={movie.abstract}
        director={movie.director}
        image={movie.image}
        genre={movie.genre}
        release_year={movie.release_year}
        link={`/movies/${movie.id}`}
      />

      <div>
        {movie.reviews?.map((review, index) => (
          <div key={index}>
            {[review.name, review.vote, review.text]}
            <div>
              Voto: {StarsVote(review.vote)}
              {console.log(review.vote)}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
