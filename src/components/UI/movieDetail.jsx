import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Buttons from "./Buttons";
import { Link } from "react-router";

export default function MovieDetail({
  title,
  director,
  abstract,
  image,
  genre,
  release_year,
  link,
}) {
  return (
    <div className="flex gap-10 p-6 rounded-2xl">
      <div className="max-w-72">
        <img className="rounded-lg" src={image} alt={title} />
      </div>
      <div className="space-y-3">
        <Heading level={1}>{title}</Heading>
        <Heading level={3}>Diretto da: {director}</Heading>
        <Heading level={5}>Genere: {genre}</Heading>
        <Heading level={5}>Anno: {release_year}</Heading>
        <Heading level={4}>Trama:</Heading>
        <Paragraph>{abstract}</Paragraph>
      </div>
    </div>
  );
}
