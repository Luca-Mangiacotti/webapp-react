import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Buttons from "./Buttons";
import { Link } from "react-router";

export default function Card({
  title,
  director,
  abstract,
  image,
  genre,
  release_year,
  link,
}) {
  return (
    <div className="bg-gray-100 border-1 border-gray-200 text-center rounded-xl shadow h-full mx-auto flex flex-col gap-4 items-center">
      <div className="w-1/2">
        <img
          className="h-full object-cover rounded-lg mt-2 shadow-2xl"
          src={image}
          alt={title}
        />
      </div>
      <div className="p-4 flex flex-col mt-auto">
        <Heading level={4}>{title}</Heading>
        <Heading level={5}>{director}</Heading>
        <Heading level={6}>Genere: {genre}</Heading>
        <Heading level={6}>Anno: {release_year}</Heading>
        <Paragraph size="sm" className="truncate">
          {/* {abstract} */}
        </Paragraph>
        <div className="mt-auto text-center">
          <Link to={link}>
            <Buttons size="md">Vai alla Scheda</Buttons>
          </Link>
        </div>
      </div>
    </div>
  );
}
