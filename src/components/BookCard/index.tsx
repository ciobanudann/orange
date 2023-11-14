import React from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

type Props = {
  title: string;
  id: string;
  subtitle?: string;
  thumbnail?: string;
  textSnippet?: string;
};

const BookCard: React.FC<Props> = ({
  title,
  subtitle,
  textSnippet,
  thumbnail,
  id,
}) => {
  return (
    <Link
      to={`/books/${id}`}
      className="flex flex-col items-center gap-4 p-4 bg-white rounded-xl"
    >
      <img src={thumbnail} className="h-72"></img>
      <h3 className="font-bold" data-cy={`book-card-title-${title}`}>
        {title}
      </h3>
      {subtitle}
      <p className="max-h-48">{textSnippet && parse(textSnippet)}</p>
    </Link>
  );
};

export default BookCard;
