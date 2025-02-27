import axios from "../api/axios";
import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";

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
  console.log(movie);
  return (
    <div>
      Pagina del film: {movie.title}
      <div>
        {movie.reviews?.map((review, index) => (
          <div key={index}> {[review.name, review.vote, review.text]}</div>
        ))}
      </div>
    </div>
  );
}
