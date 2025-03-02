import axios from "../api/axios";
import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { Link } from "react-router";

//import dei componenti
import MovieDetail from "../components/UI/movieDetail";
import Container from "../components/UI/Container";
import Buttons from "../components/UI/Buttons";
import Review from "../components/UI/Review";
import Heading from "../components/UI/Heading";
import FormAddReview from "../components/FormAddReview";

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

      {movie.reviews?.length > 0 && (
        <section className="mt-4 bg-white p-4 space-y-4">
          <Heading level={2}>Recensioni</Heading>
          <div>
            {movie?.reviews?.map((review, index) => (
              <div key={index} className="py-2 border-b border-neutral-200">
                <Review review={review} />
              </div>
            ))}
          </div>
        </section>
      )}
      <section className="mt-4 bg-white p-4 space-y-4">
        <Heading level={3}>Aggiungi una recensione</Heading>
        <FormAddReview fetchMovie={fetchMovie} />
      </section>
    </Container>
  );
}
